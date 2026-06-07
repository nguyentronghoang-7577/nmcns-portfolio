import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const sessionPath =
  "C:/Users/Nguyen Trong Hoang/.codex/sessions/2026/06/07/rollout-2026-06-07T20-48-37-019ea257-b67c-7542-bf1f-edb7bad746a9.jsonl";

function inline(text) {
  return text
    .replace(/\{color="[^"]+"\}/g, "")
    .replace(/\\>/g, ">")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/(?<!\*)\*([^*]+?)\*(?!\*)/g, "<em>$1</em>")
    .replace(/`([^`]+?)`/g, "<code>$1</code>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2" target="_blank" rel="noreferrer">$1</a>');
}

function notionToHtml(markdown, localImages) {
  let imageIndex = 0;
  let listType = null;
  const output = [];

  const closeList = () => {
    if (listType) output.push(`</${listType}>`);
    listType = null;
  };

  const lines = markdown
    .replace(/^!\[[^\]]*\]\(https:\/\/images\.unsplash\.com[^\n]+\)\s*/i, "")
    .replace(/<empty-block\/>/g, "")
    .split(/\r?\n/);

  for (const rawLine of lines) {
    const line = rawLine.replace(/^\t+/, "").trimEnd();
    const trimmed = line.trim();

    if (!trimmed) {
      closeList();
      continue;
    }

    const image = trimmed.match(/^!\[([^\]]*)\]\((https?:\/\/.+)\)$/);
    if (image) {
      closeList();
      const src = image[2].includes("prod-files-secure")
        ? localImages[imageIndex++] || image[2]
        : image[2];
      output.push(`<figure><img src="${src}" alt="${inline(image[1])}" loading="lazy"></figure>`);
      continue;
    }

    const heading = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      output.push(`<h${level}>${inline(heading[2])}</h${level}>`);
      continue;
    }

    if (trimmed === "---") {
      closeList();
      output.push("<hr>");
      continue;
    }

    if (trimmed.startsWith("> ")) {
      closeList();
      output.push(`<blockquote>${inline(trimmed.slice(2))}</blockquote>`);
      continue;
    }

    const unordered = trimmed.match(/^-\s+(.+)$/);
    const ordered = trimmed.match(/^\d+\.\s+(.+)$/);
    if (unordered || ordered) {
      const nextType = unordered ? "ul" : "ol";
      if (listType !== nextType) {
        closeList();
        output.push(`<${nextType}>`);
        listType = nextType;
      }
      output.push(`<li>${inline((unordered || ordered)[1])}</li>`);
      continue;
    }

    if (/^<callout\b/.test(trimmed)) {
      closeList();
      output.push('<aside class="notion-callout">');
      continue;
    }
    if (trimmed === "</callout>") {
      closeList();
      output.push("</aside>");
      continue;
    }
    if (trimmed === "<columns>") {
      closeList();
      output.push('<div class="notion-columns">');
      continue;
    }
    if (trimmed === "</columns>") {
      closeList();
      output.push("</div>");
      continue;
    }
    if (trimmed === "<column>") {
      closeList();
      output.push('<section class="notion-column">');
      continue;
    }
    if (trimmed === "</column>") {
      closeList();
      output.push("</section>");
      continue;
    }
    if (/^<table\b/.test(trimmed)) {
      closeList();
      output.push('<div class="notion-table-wrap"><table>');
      continue;
    }
    if (trimmed === "</table>") {
      closeList();
      output.push("</table></div>");
      continue;
    }
    if (/^<\/?(tr|td)>$/.test(trimmed)) {
      closeList();
      output.push(trimmed);
      continue;
    }
    if (/^<td>.*<\/td>$/.test(trimmed)) {
      closeList();
      output.push(inline(trimmed));
      continue;
    }

    closeList();
    output.push(`<p>${inline(trimmed)}</p>`);
  }

  closeList();
  return output.join("\n");
}

const sourceLines = (await readFile(sessionPath, "utf8")).split(/\r?\n/);
const notionSources = {};

for (const line of sourceLines) {
  if (!line.includes('"tool":"notion_fetch"')) continue;
  const entry = JSON.parse(line);
  const resultText = entry.payload?.result?.Ok?.content?.[0]?.text;
  if (!resultText) continue;

  const result = JSON.parse(resultText);
  const idMatch = result.title.match(/Dự án\s+(\d+)/i);
  const contentMatch = result.text.match(/<content>\n([\s\S]*?)\n<\/content>/);
  if (idMatch && contentMatch) notionSources[Number(idMatch[1])] = contentMatch[1];
}

const documents = {};

for (let id = 1; id <= 6; id += 1) {
  if (!notionSources[id]) throw new Error(`Không tìm thấy nguồn Notion của dự án ${id}`);

  const googleHtml = await readFile(
    resolve(root, "assets", "project-content", `project-${id}.html`),
    "utf8"
  );
  const localImages = [...googleHtml.matchAll(/<img[^>]+src="(data:image\/[^"]+)"/gi)].map(
    match => match[1]
  );
  documents[id] = notionToHtml(notionSources[id], localImages);
}

await writeFile(
  resolve(root, "project-content.js"),
  `window.projectDocuments = ${JSON.stringify(documents)};\n`,
  "utf8"
);
