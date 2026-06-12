const projects = [
  {
    id: 1,
    title: "Thao tác cơ bản với tệp tin và thư mục",
    short: "Quản lý vòng đời tệp tin khoa học",
    category: ["digital"],
    tags: ["Kỹ năng số", "File Explorer"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1400&q=80",
    summary: "Thực hành các thao tác quản lý tệp tin và thư mục trên Windows, từ tạo mới đến sao chép, di chuyển, xóa và khôi phục dữ liệu.",
    product: "Cấu trúc thư mục và ảnh minh chứng thao tác",
    highlight: "Xây dựng cấu trúc dữ liệu dễ tìm kiếm, dễ bảo trì.",
    skills: ["Create · Rename · Copy · Move · Delete · Restore", "Tổ chức dữ liệu khoa học", "Hiểu vòng đời của tệp tin"],
    content: `
      <h3>Nền tảng của một không gian số ngăn nắp</h3>
      <p>Dự án thực hành toàn bộ vòng đời của tệp tin trên Windows, từ lúc tạo mới, đặt tên và sắp xếp đến sao chép, di chuyển, xóa và khôi phục dữ liệu.</p>
      <div class="case-callout"><strong>Mục tiêu</strong><p>Làm chủ File Explorer, hiểu rõ sự khác biệt giữa sao chép và di chuyển, đồng thời xây dựng cấu trúc thư mục khoa học.</p></div>
      <h3>Quy trình thực hiện</h3>
      <ol>
        <li>Mở File Explorer bằng tổ hợp <code>Windows + E</code>, vào <code>This PC</code> và chọn ổ lưu trữ phù hợp; nếu chỉ có ổ C, sử dụng thư mục Documents.</li>
        <li>Tạo thư mục gốc theo quy tắc <code>ThucHanh_HoTenSinhVien</code>, đi vào thư mục và tạo tệp văn bản <code>GhiChu.txt</code>.</li>
        <li>Đổi tên tệp thành <code>GhiChuQuanTrong.txt</code> để thực hành quy tắc đặt tên có ý nghĩa và dễ tìm kiếm.</li>
        <li>Tạo thư mục con <code>TaiLieu</code>, sao chép tệp bằng <code>Ctrl + C</code> và <code>Ctrl + V</code>, sau đó quan sát bản gốc vẫn còn nguyên.</li>
        <li>Tạo tệp <code>DiChuyen.txt</code>, sử dụng <code>Ctrl + X</code> và <code>Ctrl + V</code>, rồi kiểm tra tệp chỉ còn tại vị trí mới.</li>
        <li>Xóa <code>GhiChuQuanTrong.txt</code> vào Recycle Bin và khôi phục tệp bằng lệnh Restore để hiểu cơ chế xóa có thể hoàn tác.</li>
        <li>Chọn <code>DiChuyen.txt</code> và dùng <code>Shift + Delete</code> để phân biệt thao tác xóa vĩnh viễn với xóa thông thường.</li>
      </ol>
      <div class="case-callout"><strong>Sản phẩm minh chứng</strong><p>Bộ ảnh ghi lại đầy đủ từng thao tác tạo thư mục, tạo và đổi tên tệp, sao chép, di chuyển, xóa, xóa vĩnh viễn và khôi phục từ Recycle Bin.</p></div>
      <h3>Kết quả và bài học</h3>
      <p>Tôi hoàn thành quy trình quản lý vòng đời của tệp tin và nhận ra rằng một cấu trúc lưu trữ tốt giúp tiết kiệm thời gian, giảm nhầm lẫn và tạo nền tảng ổn định cho mọi dự án số sau này.</p>
    `,
    doc: "https://docs.google.com/document/d/1gjwPnn0dtlmaMKETPm_qa4S7dis7PnlTPZqs6ctcpTQ/edit?usp=sharing"
  },
  {
    id: 2,
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    short: "Tìm đúng nguồn, đánh giá đúng giá trị",
    category: ["research", "ai"],
    tags: ["Nghiên cứu", "AI", "Harvard"],
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1400&q=80",
    summary: "Nghiên cứu tác động của AI trong giáo dục đại học qua quy trình tìm kiếm, chọn lọc và đánh giá chéo nguồn học thuật.",
    product: "Bảng đánh giá 11 nguồn học thuật",
    highlight: "Kết hợp nguồn quốc tế, trong nước, báo cáo tổ chức và nguồn mở.",
    skills: ["Tìm kiếm nâng cao", "Đánh giá độ tin cậy", "Đối chiếu nhiều nguồn", "Trích dẫn Harvard"],
    content: `
      <h3>Đặt vấn đề và phạm vi nghiên cứu</h3>
      <p>AI đang tạo ra thay đổi sâu rộng trong giáo dục đại học: cá nhân hóa học tập, tự động hóa tác vụ và hỗ trợ dự đoán kết quả. Song song với cơ hội là các rủi ro về liêm chính học thuật, độ chính xác và sự phụ thuộc vào công nghệ.</p>
      <div class="case-facts"><div><strong>2021–2025</strong><span>Phạm vi tài liệu</span></div><div><strong>11 nguồn</strong><span>Được đánh giá</span></div><div><strong>4 nhóm</strong><span>Loại nguồn tin</span></div></div>
      <h3>Chiến lược tìm kiếm</h3>
      <ul>
        <li><strong>Cơ sở dữ liệu quốc tế:</strong> Frontiers, PMC, Taylor & Francis.</li>
        <li><strong>Nguồn trong nước:</strong> Tạp chí Khoa học Giáo dục Việt Nam, Tạp chí Cộng sản, Đại học Đà Nẵng.</li>
        <li><strong>Báo cáo tổ chức:</strong> UNESCO và các báo cáo định hướng chính sách.</li>
        <li><strong>Nguồn mở:</strong> FPT IS, UEH Future để bổ sung góc nhìn thực tiễn.</li>
      </ul>
      <p>Các từ khóa chính gồm <code>"Artificial Intelligence in Education"</code>, <code>"AI and academic integrity"</code>, <code>"AI trong giáo dục đại học"</code> và <code>"Tác động của AI"</code>.</p>
      <h3>Đánh giá nguồn tiêu biểu</h3>
      <div class="case-table-wrap"><table class="case-table"><thead><tr><th>Nguồn</th><th>Điểm mạnh</th><th>Đánh giá</th></tr></thead><tbody>
        <tr><td>Frontiers, 2024</td><td>Phân tích sâu về liêm chính học thuật và phương pháp đánh giá.</td><td>Rất cao</td></tr>
        <tr><td>PMC, 2025</td><td>Khai thác sức khỏe tinh thần và học thuật của sinh viên.</td><td>Cao</td></tr>
        <tr><td>Taylor & Francis, 2025</td><td>Nghiên cứu thực nghiệm về cơ hội và chuyển đổi học thuật.</td><td>Rất cao</td></tr>
        <tr><td>Cogent Education, 2024</td><td>Tổng hợp các lộ trình học tập được tối ưu hóa bằng thuật toán AI.</td><td>Khá</td></tr>
        <tr><td>UNESCO, 2021</td><td>Định hướng chiến lược và góc nhìn chính sách toàn cầu.</td><td>Rất cao</td></tr>
        <tr><td>Tạp chí Cộng sản, 2025</td><td>Phản ánh tác động của AI tới đào tạo nguồn nhân lực tại Việt Nam.</td><td>Rất cao</td></tr>
        <tr><td>Tạp chí KHGD Việt Nam, 2024</td><td>Số liệu bám sát thực trạng sinh viên Việt Nam.</td><td>Cao</td></tr>
        <tr><td>Đại học Đà Nẵng, 2024</td><td>Phân tích tác động tích cực tới tự học, nghiên cứu và tương tác.</td><td>Cao</td></tr>
        <tr><td>Đại học Kinh tế Quốc dân, 2024</td><td>Nêu khung pháp lý, bảo mật và chính sách bồi dưỡng giảng viên.</td><td>Khá</td></tr>
        <tr><td>FPT IS, 2024</td><td>Case study thực tế và xu hướng công nghệ cập nhật.</td><td>Cao</td></tr>
        <tr><td>UEH Future, 2024</td><td>Trình bày sinh động mô hình bốn giai đoạn ứng dụng AI.</td><td>Khá</td></tr>
      </tbody></table></div>
      <h3>Tiêu chí đánh giá và danh mục tài liệu</h3>
      <p>Mỗi tài liệu được đối chiếu theo năm tiêu chí: uy tín tác giả, cơ quan xuất bản, phương pháp nghiên cứu, hệ thống trích dẫn và tính cập nhật. Danh mục cuối cùng gồm bảy bài báo khoa học cùng báo cáo UNESCO, kỷ yếu đại học và các nguồn mở có uy tín.</p>
      <ol class="reference-list">
        <li>Arowosegbe et al. (2025), <em>Generative artificial intelligence in higher education</em>, Taylor & Francis.</li>
        <li>Chaudhary et al. (2025), <em>Exploring the effects of artificial intelligence on student and academic well-being</em>, PMC.</li>
        <li>Liu & Yushchik (2024), <em>Exploring the prospects of using artificial intelligence in education</em>, Cogent Education.</li>
        <li>UNESCO (2021), <em>AI and education: Guidance for policy-makers</em>.</li>
        <li>Uunona & Goosen (2024), <em>Artificial intelligence in education: implications for academic integrity</em>, Frontiers.</li>
        <li>Các nghiên cứu Việt Nam từ Tạp chí KHGD Việt Nam, Đại học Đà Nẵng, Đại học Kinh tế Quốc dân, FPT IS và UEH Future.</li>
      </ol>
      <h3>Kết luận</h3>
      <p>AI mang lại tiềm năng lớn trong cá nhân hóa và tối ưu hóa giáo dục, nhưng đòi hỏi phương pháp kiểm tra mới để bảo vệ sự trung thực. Dự án giúp tôi hình thành thói quen tìm kiếm có hệ thống, thiết lập bộ lọc và đánh giá chéo nguồn trước khi sử dụng thông tin.</p>
    `,
    doc: "https://docs.google.com/document/d/1CJxI-86Jv-P8j7Y_kf5qQ89VTz7uWMNC6_aSrFevh5w/edit?usp=sharing"
  },
  {
    id: 3,
    title: "Viết Prompt hiệu quả cho tác vụ học tập",
    short: "Biến yêu cầu thành kết quả chất lượng",
    category: ["ai", "digital"],
    tags: ["AI", "Prompt", "S.P.I.C.E"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1400&q=80",
    summary: "Thử nghiệm Prompt từ cơ bản đến nâng cao cho ba tác vụ: tóm tắt, giải thích và tạo câu hỏi ôn tập.",
    product: "Bộ Prompt 3 cấp độ cho 3 tác vụ",
    highlight: "Xây dựng framework S.P.I.C.E cho Prompt hiệu quả.",
    skills: ["Role Prompting", "Context & Examples", "Structured Output", "Bloom's Taxonomy"],
    content: `
      <h3>Ba tác vụ thử nghiệm</h3>
      <p>Tôi thử nghiệm cách Prompt thay đổi chất lượng đầu ra trên ba tác vụ phổ biến: tóm tắt tài liệu học thuật, giải thích khái niệm phức tạp và tạo bộ câu hỏi ôn tập.</p>
      <h3>Thử nghiệm 1 · Tóm tắt tài liệu học thuật</h3>
      <div class="case-table-wrap"><table class="case-table prompt-table"><thead><tr><th>Cấp độ</th><th>Nội dung Prompt</th><th>Đặc điểm</th></tr></thead><tbody>
        <tr><td>Cơ bản</td><td>“Tóm tắt văn bản sau cho tôi.”</td><td>Ngắn, thiếu ngữ cảnh, kết quả thường chung chung.</td></tr>
        <tr><td>Cải tiến</td><td>“Tóm tắt văn bản dưới đây trong khoảng 300 chữ. Liệt kê các luận điểm chính bằng gạch đầu dòng và giữ phong cách trang trọng.”</td><td>Có giới hạn độ dài và định dạng rõ ràng.</td></tr>
        <tr><td>Nâng cao</td><td>“Bạn là chuyên gia phân tích dữ liệu giáo dục. Tóm tắt theo cấu trúc: mục đích, phương pháp, kết quả quan trọng và đề xuất thực tiễn.”</td><td>Role Prompting và Structured Output.</td></tr>
      </tbody></table></div>
      <h3>Thử nghiệm 2 · Giải thích khái niệm lạm phát</h3>
      <div class="case-table-wrap"><table class="case-table prompt-table"><thead><tr><th>Cấp độ</th><th>Nội dung Prompt</th><th>Đặc điểm</th></tr></thead><tbody>
        <tr><td>Cơ bản</td><td>“Lạm phát là gì?”</td><td>Câu hỏi định nghĩa, kết quả thường giống từ điển.</td></tr>
        <tr><td>Cải tiến</td><td>“Giải thích lạm phát cho sinh viên năm nhất không chuyên kinh tế. Sử dụng ví dụ về giá ổ bánh mì.”</td><td>Xác định đối tượng và ví dụ trực quan.</td></tr>
        <tr><td>Nâng cao</td><td>“Đóng vai giáo sư kinh tế. Giải thích theo mô hình Định nghĩa → Nguyên nhân → Hệ quả → Giải pháp, dùng phép ẩn dụ và ví dụ thực tế tại Zimbabwe.”</td><td>Persona, analogy và contextual framework.</td></tr>
      </tbody></table></div>
      <h3>Thử nghiệm 3 · Tạo câu hỏi ôn tập quang hợp</h3>
      <div class="case-table-wrap"><table class="case-table prompt-table"><thead><tr><th>Cấp độ</th><th>Nội dung Prompt</th><th>Đặc điểm</th></tr></thead><tbody>
        <tr><td>Cơ bản</td><td>“Tạo 5 câu hỏi về quang hợp.”</td><td>Ngẫu nhiên, chủ yếu ở mức nhận biết.</td></tr>
        <tr><td>Cải tiến</td><td>“Tạo 5 câu hỏi trắc nghiệm có đáp án về quang hợp, tập trung vào pha sáng và pha tối.”</td><td>Có phạm vi và định dạng MCQ.</td></tr>
        <tr><td>Nâng cao</td><td>“Dựa trên thang Bloom, tạo 6 câu hỏi: 2 câu Hiểu, 2 câu Phân tích, 2 câu Vận dụng cao; kèm đáp án và giải thích phương án sai.”</td><td>Bloom's Taxonomy, rationale và structured output.</td></tr>
      </tbody></table></div>
      <h3>Kết quả phân tích</h3>
      <ul>
        <li><strong>Prompt cơ bản</strong> phù hợp để tra cứu nhanh nhưng thiếu chiều sâu và tổ chức.</li>
        <li><strong>Prompt cải tiến</strong> tăng chất lượng nhờ giới hạn phạm vi và định dạng.</li>
        <li><strong>Prompt nâng cao</strong> đem lại giá trị học thuật cao hơn nhờ vai trò, ví dụ và kỳ vọng cụ thể.</li>
      </ul>
      <div class="case-callout"><strong>Framework S.P.I.C.E</strong><p><b>S</b>pecificity · <b>P</b>ersona · <b>I</b>ntent · <b>C</b>ontext · <b>E</b>xamples</p></div>
      <ul>
        <li><strong>Specificity:</strong> nêu rõ độ dài, số lượng ý và giới hạn đầu ra.</li>
        <li><strong>Persona:</strong> gán vai trò phù hợp như giáo sư, biên tập viên hoặc gia sư.</li>
        <li><strong>Intent:</strong> nói rõ kết quả sẽ dùng để ôn thi, viết bài hay giải thích.</li>
        <li><strong>Context:</strong> cung cấp tài liệu nguồn và phạm vi kiến thức.</li>
        <li><strong>Examples:</strong> đưa mẫu đầu ra để AI bắt chước đúng định dạng.</li>
      </ul>
      <h3>Nguyên tắc rút ra</h3>
      <p>Đừng chỉ yêu cầu “tóm tắt”; hãy nói rõ độ dài, đối tượng đọc, mục đích sử dụng và định dạng mong muốn. Prompt càng cụ thể về bối cảnh và kỳ vọng, AI càng ít tạo ra câu trả lời hời hợt.</p>
    `,
    doc: "https://docs.google.com/document/d/144sl2kxvvQWyA8o707jRUuP-RCCDiseqCm6FmbVqqkI/edit?usp=sharing"
  },
  {
    id: 4,
    title: "Sử dụng công cụ hợp tác trực tuyến",
    short: "Cộng tác hiệu quả trong môi trường số",
    category: ["digital"],
    tags: ["Cộng tác", "Trello", "Discord"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1400&q=80",
    summary: "Tổ chức công việc nhóm từ xa bằng hệ sinh thái công cụ thống nhất cho tiến độ, tài liệu và giao tiếp.",
    product: "Minh chứng Trello, Drive và Discord",
    highlight: "Kết hợp Kanban, phân quyền và luồng thảo luận để hạn chế trôi thông tin.",
    skills: ["Quản lý Kanban", "Google Drive & Docs", "Giao tiếp theo luồng", "Quản lý phiên bản"],
    content: `
      <h3>Vai trò và bối cảnh</h3>
      <p>Trong dự án nhóm “Tổng quan về Trí tuệ nhân tạo hiện nay”, tôi đảm nhận vai trò thành viên, hỗ trợ hoàn thiện báo cáo và duy trì tiến độ phối hợp.</p>
      <h3>Hệ sinh thái công cụ</h3>
      <div class="case-facts"><div><strong>Trello</strong><span>Quản lý tác vụ</span></div><div><strong>Drive / Docs</strong><span>Tài liệu và phiên bản</span></div><div><strong>Discord</strong><span>Giao tiếp nhóm</span></div></div>
      <ul>
        <li>Thiết lập bảng Kanban, nhãn ưu tiên và nhắc lịch tự động trên Trello.</li>
        <li>Xây dựng thư mục phân cấp, phân quyền Viewer/Editor và dùng Version History trên Google Drive.</li>
        <li>Chia kênh Discord theo chủ đề, dùng Thread và ghim thông tin quan trọng.</li>
      </ul>
      <h3>Nhật ký hoạt động và tương tác</h3>
      <p>Tôi cập nhật trạng thái công việc cá nhân ít nhất ba lần mỗi tuần và thực hiện hơn mười lượt thảo luận mỗi tuần, bao gồm phản hồi tin nhắn, góp ý trực tiếp trên tài liệu và phối hợp xử lý các hạng mục còn chậm.</p>
      <h3>Quản lý tài nguyên</h3>
      <p>Cấu trúc thư mục được tổ chức theo mô hình <code>[Thư mục gốc] → [Hạng mục] → [Phiên bản]</code>. Tệp được đặt tên theo quy tắc <code>[Ngày]_[Nội dung]_[Phiên bản]</code>, ví dụ <code>19042026_NghienCuuLichSuAI_v1.pdf</code>.</p>
      <h3>Thách thức và giải pháp</h3>
      <div class="case-table-wrap"><table class="case-table"><thead><tr><th>Thách thức</th><th>Giải pháp</th><th>Kết quả</th></tr></thead><tbody>
        <tr><td>Trôi thông tin</td><td>Ghim nội dung và tạo luồng thảo luận riêng.</td><td>100% thông tin quan trọng được phản hồi đúng hạn.</td></tr>
        <tr><td>Xung đột phiên bản</td><td>Quy tắc đặt tên và Version History.</td><td>Loại bỏ tình trạng ghi đè hoặc nhầm file.</td></tr>
        <tr><td>Tiến độ không đều</td><td>Nhắc tự động trước deadline 24 giờ.</td><td>Tối đa hóa tỷ lệ hoàn thành đúng hạn.</td></tr>
      </tbody></table></div>
    `,
    doc: "https://docs.google.com/document/d/1Lv0j3XakdBr_uaJkgbDlIHHS_3Z5orwEdyTl-sceIVg/edit?usp=sharing"
  },
  {
    id: 5,
    title: "AI tạo sinh và thiết kế Infographic",
    short: "Đồng sáng tạo cùng AI",
    category: ["ai"],
    tags: ["AI", "Thiết kế", "Infographic"],
    image: "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1400&q=80",
    summary: "Thiết kế Infographic “Du lịch bền vững tại Việt Nam” bằng quy trình kết hợp AI với tư duy biên tập và thẩm mỹ cá nhân.",
    product: "Infographic Du lịch bền vững",
    highlight: "AI tạo tài nguyên; con người kiểm chứng, biên tập và chịu trách nhiệm.",
    skills: ["Gemini cho nội dung", "AI tạo hình ảnh", "Canva AI", "Biên tập & kiểm chứng"],
    content: `
      <h3>Giới thiệu sản phẩm</h3>
      <p>Dự án tạo Infographic “Du lịch bền vững tại Việt Nam” nhằm nâng cao nhận thức của người trẻ về du lịch xanh. Quy trình kết hợp Gemini, công cụ tạo ảnh AI và Canva AI với khâu biên tập cá nhân.</p>
      <h3>Quy trình đồng sáng tạo</h3>
      <ol>
        <li><strong>Gemini:</strong> tạo dàn ý và bốn mẹo du lịch xanh. Prompt yêu cầu AI đóng vai chuyên gia du lịch bền vững, viết nội dung năng động và súc tích cho người trẻ. Tôi rút gọn thành slogan như “Sống ảo không xả rác”, bổ sung dữ liệu thực tế và biên tập lại ngôn từ. Tỷ lệ đóng góp: AI 40%, cá nhân 60%.</li>
        <li><strong>Midjourney / DALL-E:</strong> tạo hình minh họa vector bằng Prompt mô tả một bạn trẻ mang bình nước tái sử dụng, khám phá rừng xanh Việt Nam với hệ màu xanh, lam và vàng. Tôi dùng Photoshop loại bỏ chi tiết thừa và điều chỉnh Color Balance.</li>
        <li><strong>Canva AI:</strong> gợi ý năm bố cục từ từ khóa <code>Eco-friendly travel infographic, modern, clean</code>. Tôi phá vỡ cấu trúc template, căn chỉnh typography và hoàn thiện thiết kế. Tỷ lệ đóng góp: AI 30%, cá nhân 70%.</li>
      </ol>
      <h3>Đánh giá công cụ</h3>
      <div class="case-table-wrap"><table class="case-table"><thead><tr><th>Công cụ</th><th>Điểm mạnh</th><th>Hạn chế</th></tr></thead><tbody>
        <tr><td>Gemini</td><td>Brainstorm nhanh, dàn ý logic.</td><td>Văn phong đôi lúc máy móc, cần kiểm chứng.</td></tr>
        <tr><td>AI tạo ảnh</td><td>Chất lượng thẩm mỹ và phong cách đa dạng.</td><td>Khó kiểm soát chính xác chi tiết nhỏ.</td></tr>
        <tr><td>Canva AI</td><td>Giảm thời gian thiết lập bố cục ban đầu.</td><td>Template thường an toàn và rập khuôn.</td></tr>
      </tbody></table></div>
      <h3>AI thay đổi quy trình sáng tạo</h3>
      <p>Thay vì quy trình tuyến tính Nghiên cứu → Viết → Vẽ → Thiết kế, tôi chuyển sang mô hình đồng sáng tạo và tuyển chọn. AI giúp rút ngắn khoảng 60% thời gian cho khâu tìm ý và phác thảo, để tôi tập trung vào kiểm chứng, biên tập cảm xúc và hoàn thiện thẩm mỹ.</p>
      <h3>Các vấn đề đạo đức cần cân nhắc</h3>
      <ul>
        <li><strong>Tính xác thực:</strong> mọi số liệu do AI gợi ý đều cần được fact-check để tránh lan truyền thông tin sai.</li>
        <li><strong>Bản quyền:</strong> AI tạo ảnh đặt ra câu hỏi về dữ liệu huấn luyện, vì vậy tôi chỉ dùng đầu ra làm tài nguyên thô và công khai việc sử dụng AI.</li>
        <li><strong>Dấu ấn cá nhân:</strong> phụ thuộc vào template và đầu ra AI dễ khiến sản phẩm bị trung bình hóa; đóng góp của con người vì thế luôn được giữ trên 50%.</li>
      </ul>
      <h3>Vai trò của con người</h3>
      <p>AI giúp rút ngắn công việc lặp lại, nhưng người sáng tạo vẫn phải kiểm chứng thông tin, định hướng thẩm mỹ, xử lý bản quyền và chịu trách nhiệm cho sản phẩm cuối cùng. Trong dự án này, đóng góp của con người luôn được duy trì trên 50%.</p>
    `,
    doc: "https://docs.google.com/document/d/1Wu-_Qfadmjuq9D1UGnpFpkeL2fuj7J-ZWV3pu3_HBdw/edit?usp=sharing"
  },
  {
    id: 6,
    title: "Sử dụng AI có trách nhiệm",
    short: "Công nghệ là công cụ, đạo đức là la bàn",
    category: ["ai", "research"],
    tags: ["AI", "Đạo đức", "5K"],
    image: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=1400&q=80",
    summary: "Nghiên cứu cách sử dụng AI minh bạch, an toàn và phù hợp với các nguyên tắc liêm chính học thuật.",
    product: "Bộ nguyên tắc cá nhân 5K và Infographic",
    highlight: "Xây dựng khung sử dụng AI minh bạch, an toàn và có trách nhiệm.",
    skills: ["Kiểm chứng thông tin", "Khai báo minh bạch", "Bảo vệ dữ liệu", "Tư duy phản biện"],
    content: `
      <h3>Nghiên cứu chính sách sử dụng AI</h3>
      <p>Các trường đại học đang chuyển từ cấm đoán sang thích nghi có kiểm soát. AI có thể hỗ trợ tìm kiếm, gợi ý cấu trúc và giải thích khái niệm, nhưng việc nhờ AI làm hộ toàn bộ hoặc tạo dữ liệu giả là vi phạm liêm chính học thuật. Mọi đóng góp của AI cần được khai báo rõ ràng.</p>
      <div class="case-table-wrap"><table class="case-table"><thead><tr><th>Tiêu chí</th><th>Đại học Công nghệ</th><th>MIT</th></tr></thead><tbody>
        <tr><td>Mức độ cho phép</td><td>Hỗ trợ tìm kiếm, gợi ý ý tưởng và định dạng cơ bản.</td><td>Linh hoạt theo đề cương của từng giảng viên.</td></tr>
        <tr><td>Quy định trích dẫn</td><td>Bắt buộc khai báo nếu AI tham gia nội dung nộp bài.</td><td>Khai báo công cụ, Prompt và vị trí đã sử dụng.</td></tr>
        <tr><td>Trọng tâm quản lý</td><td>Bảo vệ tính trung thực và công bằng.</td><td>Dạy sinh viên làm chủ AI có đạo đức.</td></tr>
      </tbody></table></div>
      <h3>Nhật ký thực hành</h3>
      <p>Tôi dùng ChatGPT để lập dàn ý cho bài tiểu luận về tác động của công nghệ số đến quyền riêng tư. Sau đầu ra đầu tiên còn chung chung, tôi yêu cầu bổ sung khía cạnh pháp lý Việt Nam, sau đó tự đọc thêm tài liệu, loại bỏ ý lan man và viết lại bằng văn phong cá nhân.</p>
      <div class="case-callout"><strong>Prompt khởi tạo</strong><p>“Đóng vai một giảng viên đại học, hãy lập một dàn ý chi tiết cho bài tiểu luận dài 5 trang về tác động của công nghệ số đến quyền riêng tư cá nhân, chú trọng bối cảnh Việt Nam.”</p></div>
      <div class="case-callout"><strong>Prompt đào sâu</strong><p>“Bổ sung vào phần thân bài một mục phân tích cụ thể về Luật An ninh mạng của Việt Nam và cách luật bảo vệ người dùng, trình bày bằng gạch đầu dòng súc tích.”</p></div>
      <div class="case-callout"><strong>Khai báo minh bạch</strong><p>“Tài liệu được xây dựng dàn ý cơ bản và tìm kiếm từ khóa với sự hỗ trợ của ChatGPT. Toàn bộ nội dung phân tích chi tiết và đối chiếu pháp lý do tác giả tự thực hiện.”</p></div>
      <h3>Ba rủi ro đạo đức chính</h3>
      <ul>
        <li><strong>Hỗ trợ hay gian lận:</strong> AI là phụ tá hợp lý khi giúp tìm ý, nhưng trở thành gian lận khi người học khoán trắng toàn bộ bài làm.</li>
        <li><strong>Sở hữu trí tuệ:</strong> đầu ra AI có thể dựa trên dữ liệu của nhiều tác giả, vì vậy cần biên tập và khai báo nguồn hỗ trợ.</li>
        <li><strong>Teo cơ tư duy:</strong> lạm dụng AI có thể làm suy giảm khả năng lập luận, phản biện và tự nghiên cứu.</li>
      </ul>
      <h3>Bộ nguyên tắc cá nhân 5K</h3>
      <ol>
        <li><strong>Không copy-paste mù quáng:</strong> AI chỉ là bản nháp số 0.</li>
        <li><strong>Kiểm chứng mọi dữ kiện:</strong> đối chiếu số liệu và trích dẫn với nguồn đáng tin cậy.</li>
        <li><strong>Khai báo minh bạch:</strong> ghi rõ công cụ và công đoạn AI đã hỗ trợ.</li>
        <li><strong>Không nhập dữ liệu nhạy cảm:</strong> bảo vệ thông tin cá nhân và tài liệu nội bộ.</li>
        <li><strong>Không ngừng tư duy phản biện:</strong> luôn tìm thiên kiến và góc nhìn còn thiếu.</li>
      </ol>
      <h3>Infographic và kết luận</h3>
      <p>Từ nghiên cứu và bộ nguyên tắc 5K, tôi xây dựng một Infographic bằng Canva kết hợp gợi ý hình ảnh từ AI để truyền tải thông điệp về liêm chính học thuật. Sản phẩm giúp tôi thay đổi cách nhìn: AI không phải kẻ thù hay cây đũa thần, mà là công cụ khuếch đại năng lực khi được sử dụng minh bạch và có trách nhiệm.</p>
      <p>AI không phải kẻ thù của giáo dục, cũng không phải cây đũa thần. Nó là công cụ khuếch đại năng lực, và giá trị của nó phụ thuộc vào cách con người sử dụng.</p>
    `,
    doc: "https://docs.google.com/document/d/1K0_DLso3PvEgVgYAgbA-KCZi7qtVBH4N3CqEO_SJbmk/edit?usp=sharing"
  }
];

const projectSupplements = {
  2: `
    <section class="rubric-supplement">
      <span class="supplement-label">Bổ sung theo rubric · Chiến lược tìm kiếm nâng cao</span>
      <h2>Nhật ký truy vấn và cơ chế lọc thông tin</h2>
      <p>Thay vì chỉ nhập từ khóa chung, tôi kết hợp cụm từ chính xác, giới hạn tên miền, định dạng tệp và thời gian xuất bản. Mỗi truy vấn phục vụ một mục tiêu riêng trong quá trình thu hẹp phạm vi và kiểm chứng chéo.</p>
      <div class="search-evidence-grid">
        <article class="search-evidence">
          <span>01 · Nguồn chính sách</span>
          <code>site:unesco.org filetype:pdf "AI and education"</code>
          <p><strong>site:</strong> giới hạn nguồn UNESCO; <strong>filetype:pdf</strong> ưu tiên báo cáo chính thức; dấu ngoặc kép giữ nguyên cụm chủ đề.</p>
          <a href="https://www.google.com/search?q=site%3Aunesco.org+filetype%3Apdf+%22AI+and+education%22" target="_blank" rel="noreferrer">Chạy lại truy vấn ↗</a>
        </article>
        <article class="search-evidence">
          <span>02 · Bối cảnh Việt Nam</span>
          <code>site:edu.vn "AI trong giáo dục đại học"</code>
          <p>Giới hạn kết quả trong hệ thống giáo dục Việt Nam để tìm nghiên cứu, kỷ yếu và góc nhìn phù hợp với bối cảnh trong nước.</p>
          <a href="https://www.google.com/search?q=site%3Aedu.vn+%22AI+trong+gi%C3%A1o+d%E1%BB%A5c+%C4%91%E1%BA%A1i+h%E1%BB%8Dc%22" target="_blank" rel="noreferrer">Chạy lại truy vấn ↗</a>
        </article>
        <article class="search-evidence">
          <span>03 · Tìm đúng trọng tâm</span>
          <code>intitle:"artificial intelligence in education" filetype:pdf</code>
          <p><strong>intitle:</strong> yêu cầu chủ đề xuất hiện trong tiêu đề, giúp loại bỏ kết quả chỉ nhắc đến AI một cách phụ trợ.</p>
          <a href="https://www.google.com/search?q=intitle%3A%22artificial+intelligence+in+education%22+filetype%3Apdf" target="_blank" rel="noreferrer">Chạy lại truy vấn ↗</a>
        </article>
        <article class="search-evidence">
          <span>04 · Tính cập nhật</span>
          <code>"AI academic integrity" after:2023</code>
          <p><strong>after:</strong> ưu tiên nghiên cứu mới sau khi AI tạo sinh phổ biến, phù hợp với vấn đề liêm chính học thuật hiện tại.</p>
          <a href="https://www.google.com/search?q=%22AI+academic+integrity%22+after%3A2023" target="_blank" rel="noreferrer">Chạy lại truy vấn ↗</a>
        </article>
        <article class="search-evidence">
          <span>05 · Loại nhiễu thương mại</span>
          <code>"generative AI" "higher education" -course -advertisement</code>
          <p>Dấu trừ loại các khóa học và nội dung quảng cáo, giữ lại kết quả phân tích, nghiên cứu và thảo luận học thuật.</p>
          <a href="https://www.google.com/search?q=%22generative+AI%22+%22higher+education%22+-course+-advertisement" target="_blank" rel="noreferrer">Chạy lại truy vấn ↗</a>
        </article>
      </div>
      <h2>Quy trình chọn và loại nguồn</h2>
      <div class="case-table-wrap"><table class="case-table"><thead><tr><th>Bước</th><th>Câu hỏi kiểm tra</th><th>Quyết định</th></tr></thead><tbody>
        <tr><td>Sàng lọc nhanh</td><td>Tiêu đề, tóm tắt và năm xuất bản có đúng phạm vi không?</td><td>Loại kết quả lệch chủ đề hoặc quá cũ.</td></tr>
        <tr><td>Kiểm tra thẩm quyền</td><td>Tác giả và cơ quan xuất bản có chuyên môn, uy tín không?</td><td>Ưu tiên tạp chí, trường đại học và tổ chức quốc tế.</td></tr>
        <tr><td>Kiểm tra bằng chứng</td><td>Nguồn có phương pháp, dữ liệu và tài liệu tham khảo rõ ràng không?</td><td>Hạ mức tin cậy nếu chỉ là ý kiến hoặc nội dung quảng bá.</td></tr>
        <tr><td>Đánh giá chéo</td><td>Kết luận có được ít nhất hai nguồn độc lập hỗ trợ không?</td><td>Chỉ sử dụng nhận định quan trọng sau khi đối chiếu.</td></tr>
      </tbody></table></div>
      <div class="case-callout"><strong>Bài học chiến lược</strong><p>Toán tử tìm kiếm không tự bảo đảm nguồn đáng tin cậy. Chúng giúp giảm nhiễu; quyết định cuối cùng vẫn cần đánh giá tác giả, phương pháp, bằng chứng, thiên kiến và tính cập nhật.</p></div>
    </section>
  `,
  3: `
    <section class="rubric-supplement">
      <span class="supplement-label">Bổ sung theo rubric · So sánh đầu ra AI</span>
      <h2>Cùng một tác vụ, chất lượng thay đổi như thế nào?</h2>
      <p>Tôi so sánh đầu ra mẫu cho tác vụ giải thích khái niệm lạm phát. Nội dung dưới đây minh họa sự khác biệt về độ chính xác, khả năng học tập và mức kiểm soát khi Prompt được cải tiến.</p>
      <div class="output-comparison">
        <article>
          <span>Prompt cơ bản</span>
          <h3>“Lạm phát là gì?”</h3>
          <div class="ai-output"><strong>Đầu ra mẫu</strong><p>Lạm phát là sự gia tăng mức giá chung của hàng hóa và dịch vụ theo thời gian, làm giảm sức mua của đồng tiền.</p></div>
          <ul>
            <li>Đúng về định nghĩa nhưng giống từ điển.</li>
            <li>Không biết người đọc là ai và dùng kết quả để làm gì.</li>
            <li>Thiếu ví dụ, cấu trúc và giới hạn phạm vi.</li>
          </ul>
        </article>
        <article class="advanced-output">
          <span>Prompt nâng cao</span>
          <h3>Vai trò + đối tượng + cấu trúc + ví dụ</h3>
          <div class="ai-output"><strong>Đầu ra mẫu</strong><p>Nếu năm trước 20.000 đồng mua được hai ổ bánh mì nhưng năm nay chỉ mua được một ổ rưỡi, sức mua của tiền đã giảm. Đây là biểu hiện của lạm phát. Lạm phát có thể đến từ chi phí sản xuất tăng, nhu cầu vượt cung hoặc lượng tiền lưu thông tăng nhanh.</p></div>
          <ul>
            <li>Điều chỉnh ngôn ngữ cho sinh viên không chuyên.</li>
            <li>Dùng ví dụ giúp kết nối định nghĩa với đời sống.</li>
            <li>Cấu trúc rõ nguyên nhân, hệ quả và hướng xử lý.</li>
          </ul>
        </article>
      </div>
      <h2>Vì sao Prompt nâng cao hoạt động tốt hơn?</h2>
      <div class="case-table-wrap"><table class="case-table"><thead><tr><th>Thành phần</th><th>Tác động đến AI</th><th>Giá trị cho người học</th></tr></thead><tbody>
        <tr><td>Persona</td><td>Kích hoạt phong cách và kiến thức phù hợp với vai trò.</td><td>Giải thích có định hướng chuyên môn.</td></tr>
        <tr><td>Đối tượng đọc</td><td>Điều chỉnh thuật ngữ và độ khó.</td><td>Giảm tải nhận thức, dễ tiếp cận hơn.</td></tr>
        <tr><td>Cấu trúc đầu ra</td><td>Giảm tính ngẫu nhiên, buộc AI bao phủ các phần cần thiết.</td><td>Dễ ghi chú, so sánh và ôn tập.</td></tr>
        <tr><td>Ví dụ và giới hạn</td><td>Tạo điểm neo cụ thể, hạn chế trả lời lan man.</td><td>Kết nối lý thuyết với tình huống thực tế.</td></tr>
      </tbody></table></div>
      <div class="case-callout"><strong>Kết luận phản biện</strong><p>Prompt tốt không khiến AI luôn đúng. Nó làm yêu cầu rõ hơn và đầu ra dễ kiểm tra hơn. Người dùng vẫn phải xác minh dữ kiện, phát hiện thiên kiến và chỉnh sửa bằng tư duy của mình.</p></div>
    </section>
  `
};

const projectThemes = {
  1: { accent: "#4c60ff", accent2: "#c8ff32", accent3: "#62d9ff", mood: "Digital Foundation", badge: "Gọn gàng · Rõ ràng · Có hệ thống" },
  2: { accent: "#7c3cff", accent2: "#00d4a6", accent3: "#ffcf4a", mood: "Research Lab", badge: "Nguồn tin · Đối chiếu · Tin cậy" },
  3: { accent: "#ff66b3", accent2: "#4c60ff", accent3: "#c8ff32", mood: "Prompt Studio", badge: "Vai trò · Ngữ cảnh · Đầu ra" },
  4: { accent: "#ff8a00", accent2: "#31d0aa", accent3: "#ffe066", mood: "Collaboration Hub", badge: "Kanban · Drive · Discord" },
  5: { accent: "#00b8ff", accent2: "#ff66b3", accent3: "#ffcf4a", mood: "Creative Lab", badge: "AI · Thiết kế · Biên tập" },
  6: { accent: "#2ed573", accent2: "#4c60ff", accent3: "#ff6b35", mood: "Responsible AI", badge: "5K · Minh bạch · Phản biện" }
};

const projectOverviews = {
  1: {
    role: "Thực hành cá nhân",
    process: "Tạo, đổi tên, sao chép, di chuyển, xóa và khôi phục tệp theo từng bước có minh chứng.",
    outcome: "Hoàn thiện cấu trúc lưu trữ rõ ràng và hiểu khác biệt giữa xóa thường, khôi phục và xóa vĩnh viễn.",
    lesson: "Một hệ thống tệp gọn gàng giúp mọi dự án sau đó dễ kiểm soát hơn."
  },
  2: {
    role: "Người nghiên cứu và đánh giá nguồn",
    process: "Dùng truy vấn nâng cao, lọc theo loại nguồn, năm xuất bản và đối chiếu nhiều tài liệu độc lập.",
    outcome: "Tổng hợp 11 nguồn học thuật, chính sách và thực tiễn để phân tích tác động của AI trong giáo dục đại học.",
    lesson: "Nguồn tốt cần cả độ uy tín, tính cập nhật, phương pháp rõ ràng và khả năng kiểm chứng chéo."
  },
  3: {
    role: "Người thiết kế và kiểm thử Prompt",
    process: "So sánh Prompt cơ bản, cải tiến và nâng cao trên ba tác vụ học tập thường gặp.",
    outcome: "Xây dựng framework S.P.I.C.E để kiểm soát vai trò, mục tiêu, bối cảnh, ví dụ và định dạng đầu ra.",
    lesson: "Prompt càng rõ thì đầu ra càng dễ dùng, nhưng vẫn cần con người kiểm chứng và biên tập."
  },
  4: {
    role: "Thành viên nhóm và điều phối tiến độ",
    process: "Kết hợp Trello, Google Drive, Google Docs và Discord để quản lý việc nhóm từ xa.",
    outcome: "Giảm trôi thông tin, hạn chế xung đột phiên bản và duy trì nhịp cập nhật công việc đều đặn.",
    lesson: "Cộng tác tốt không chỉ là dùng công cụ, mà là thống nhất quy ước và phản hồi đúng lúc."
  },
  5: {
    role: "Biên tập nội dung và thiết kế Infographic",
    process: "Dùng AI tạo ý tưởng, hình ảnh gợi ý và bố cục ban đầu, sau đó kiểm chứng, rút gọn và chỉnh sửa trong Canva.",
    outcome: "Hoàn thiện Infographic về du lịch bền vững với thông điệp rõ, hình ảnh nhất quán và dấu ấn cá nhân.",
    lesson: "AI tăng tốc giai đoạn phác thảo, còn chất lượng cuối phụ thuộc vào lựa chọn và trách nhiệm của người làm."
  },
  6: {
    role: "Người xây dựng nguyên tắc sử dụng AI",
    process: "Phân tích rủi ro học thuật, quyền riêng tư, sở hữu trí tuệ và tác động đến tư duy phản biện.",
    outcome: "Đúc kết bộ nguyên tắc 5K để dùng AI minh bạch, có kiểm chứng và không đánh mất vai trò chủ động.",
    lesson: "AI hữu ích nhất khi được dùng như công cụ hỗ trợ, không phải nơi giao phó toàn bộ suy nghĩ."
  }
};

const grid = document.querySelector("#projects-grid");
const modal = document.querySelector("#project-modal");
const modalContent = document.querySelector("#modal-content");
let parallaxFrame;
let projectCloseTimer;
let projectCloseSnapshot;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const progress = document.createElement("div");
progress.className = "scroll-progress";
progress.setAttribute("aria-hidden", "true");
document.body.append(progress);

function renderProjects() {
  grid.innerHTML = projects.map(project => `
    <article class="project-card reveal" data-categories="${project.category.join(" ")}" data-project="${project.id}" tabindex="0">
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}" loading="lazy">
        <span class="project-number">DỰ ÁN / 0${project.id}</span>
        <span class="project-open">↗</span>
      </div>
      <div class="project-info">
        <div class="project-tags">${project.tags.map(tag => `<span>${tag}</span>`).join("")}</div>
        <h3>${project.title}</h3>
        <p>${project.short}</p>
      </div>
    </article>
  `).join("");
}

function prepareProjectScene() {
  const viewportCenter = window.innerHeight / 2;
  document.querySelectorAll("main > section, footer").forEach(element => {
    const rect = element.getBoundingClientRect();
    const isVisible = rect.bottom > 0 && rect.top < window.innerHeight;
    element.classList.toggle("project-page-scene", isVisible);
    if (isVisible) {
      element.style.setProperty("--project-scene-origin-y", `${viewportCenter - rect.top}px`);
    }
  });
}

function openProject(id) {
  const project = projects.find(item => item.id === Number(id));
  if (!project) return;
  if (projectCloseTimer) clearTimeout(projectCloseTimer);
  projectCloseTimer = null;
  modal.classList.remove("project-closing");
  const theme = projectThemes[project.id] || projectThemes[1];
  const overview = projectOverviews[project.id];
  modalContent.className = `project-theme project-theme-${project.id}`;
  modalContent.style.setProperty("--project-accent", theme.accent);
  modalContent.style.setProperty("--project-accent-2", theme.accent2);
  modalContent.style.setProperty("--project-accent-3", theme.accent3);
  modalContent.innerHTML = `
    <div class="project-document-background" aria-hidden="true">
      <img class="project-document-background-image" src="${project.image}" alt="">
      <div class="project-document-background-overlay"></div>
    </div>
    <nav class="project-side-nav" aria-label="Điều hướng nội dung dự án"></nav>
    <div class="source-document-header">
      <div class="source-document-info">
        <span class="detail-index">Nội dung nguyên bản / 0${project.id}</span>
        <h3>${project.title}</h3>
        <p class="source-document-summary">${project.summary}</p>
        <div class="project-mood-strip">
          <span>${theme.mood}</span>
          <span>${theme.badge}</span>
        </div>
        <div class="project-hero-facts">
          <div><span>Sản phẩm</span><strong>${project.product}</strong></div>
          <div><span>Điểm nhấn</span><strong>${project.highlight}</strong></div>
        </div>
        ${overview ? `
          <div class="project-overview-panel" id="project-overview-${project.id}" aria-label="Tổng quan dự án">
            <div class="project-overview-item"><span>Vai trò</span><p>${overview.role}</p></div>
            <div class="project-overview-item"><span>Quy trình</span><p>${overview.process}</p></div>
            <div class="project-overview-item"><span>Kết quả</span><p>${overview.outcome}</p></div>
            <div class="project-overview-item"><span>Bài học</span><p>${overview.lesson}</p></div>
          </div>
        ` : ""}
        <div class="project-skill-cloud">
          ${project.skills.map(skill => `<span>${skill}</span>`).join("")}
        </div>
        <div class="source-document-links">
          <a class="button primary" href="${project.doc}" target="_blank" rel="noreferrer">Mở Google Docs ↗</a>
        </div>
      </div>
    </div>
    <article class="native-document" id="project-content-${project.id}">
      ${window.projectDocuments?.[project.id] || project.content}
      ${projectSupplements[project.id] || ""}
    </article>
  `;
  modal.showModal();
  normalizeProjectDocumentLists(project.id);
  bindProjectNavigator();
  modal.classList.remove("project-opening");
  requestAnimationFrame(() => modal.classList.add("project-opening"));
  modal.scrollTop = 0;
  modalContent.querySelector(".project-document-background")?.style.setProperty("--cover-parallax-y", "0px");
  prepareProjectScene();
  document.body.classList.add("project-active");
  document.body.style.overflow = "hidden";
}

function closeProject() {
  if (!modal.open || modal.classList.contains("project-closing")) return;
  if (reduceMotion.matches) {
    modal.close();
    return;
  }
  projectCloseSnapshot?.remove();
  projectCloseSnapshot = document.createElement("div");
  projectCloseSnapshot.className = "project-close-snapshot";
  const snapshotContent = modalContent.cloneNode(true);
  snapshotContent.removeAttribute("id");
  snapshotContent.classList.add("project-close-snapshot-content");
  snapshotContent.style.top = `${-modal.scrollTop}px`;
  projectCloseSnapshot.append(snapshotContent);
  modal.append(projectCloseSnapshot);
  modal.classList.remove("project-opening");
  modal.classList.add("project-closing");
  document.body.classList.add("project-returning");
  projectCloseTimer = window.setTimeout(() => {
    projectCloseTimer = null;
    if (modal.open) modal.close();
  }, 850);
}

function normalizeProjectDocumentLists(projectId) {
  if (projectId !== 1) return;
  let nextListStart = 1;
  modalContent.querySelectorAll(".native-document > ol").forEach(list => {
    list.start = nextListStart;
    nextListStart += list.querySelectorAll(":scope > li").length;
  });
}

function createProjectAnchorId(text, index) {
  const base = text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/đ/g, "d")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 42);
  return `project-section-${base || "muc"}-${index + 1}`;
}

function bindProjectNavigator() {
  const nav = modalContent.querySelector(".project-side-nav");
  if (!nav) return;
  const overview = modalContent.querySelector(".project-overview-panel");
  const headings = [...modalContent.querySelectorAll(".native-document h2, .native-document h3")]
    .filter(heading => !heading.closest(".case-table, table, .content-column, .search-evidence, .output-comparison, .ai-output"))
    .slice(0, 7);
  const navItems = [
    ...(overview ? [{ id: overview.id, label: "Tổng quan" }] : []),
    ...headings.map((heading, index) => {
      if (!heading.id) heading.id = createProjectAnchorId(heading.textContent.trim(), index);
      return { id: heading.id, label: heading.textContent.trim() };
    })
  ];
  nav.innerHTML = navItems.map((item, index) => `
    <a href="#${item.id}">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <span class="project-nav-label">${item.label}</span>
    </a>
  `).join("");
  const links = [...nav.querySelectorAll("a[href^='#']")];
  links.forEach(link => {
    link.addEventListener("click", event => {
      const target = modalContent.querySelector(link.getAttribute("href"));
      if (!target) return;
      event.preventDefault();
      links.forEach(item => item.classList.toggle("active", item === link));
      centerActiveProjectNavLink(nav, link);
      scrollProjectModalTo(target);
    });
  });
  updateProjectNavigator();
}

function getProjectModalTargetTop(target) {
  const modalTop = modal.getBoundingClientRect().top;
  return target.getBoundingClientRect().top - modalTop + modal.scrollTop;
}

function getProjectNavigatorOffset() {
  return window.matchMedia("(max-width: 900px)").matches ? 18 : 32;
}

function scrollProjectModalTo(target) {
  modal.scrollTo({
    top: Math.max(getProjectModalTargetTop(target) - getProjectNavigatorOffset(), 0),
    behavior: reduceMotion.matches ? "auto" : "smooth"
  });
}

function centerActiveProjectNavLink(nav, activeLink) {
  if (!nav || nav.scrollWidth <= nav.clientWidth) return;
  const left = activeLink.offsetLeft - (nav.clientWidth - activeLink.clientWidth) / 2;
  nav.scrollTo({ left: Math.max(left, 0), behavior: reduceMotion.matches ? "auto" : "smooth" });
}

function updateProjectNavigator() {
  const nav = modalContent.querySelector(".project-side-nav");
  const links = [...modalContent.querySelectorAll(".project-side-nav a[href^='#']")];
  if (!links.length) return;
  const activationPoint = modal.scrollTop + getProjectNavigatorOffset() + 10;
  const current = links
    .map(link => ({ link, target: modalContent.querySelector(link.getAttribute("href")) }))
    .filter(item => item.target)
    .reverse()
    .find(item => getProjectModalTargetTop(item.target) <= activationPoint);
  const activeLink = current?.link || links[0];
  links.forEach(link => link.classList.toggle("active", link === activeLink));
  centerActiveProjectNavLink(nav, activeLink);
}

renderProjects();

document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-button.active")?.classList.remove("active");
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".project-card").forEach(card => {
      const hidden = filter !== "all" && !card.dataset.categories.includes(filter);
      card.classList.toggle("hidden", hidden);
      card.classList.remove("filter-enter");
      if (!hidden) requestAnimationFrame(() => card.classList.add("filter-enter"));
    });
  });
});

grid.addEventListener("click", event => {
  if (event.target.closest("a")) return;
  const card = event.target.closest(".project-card");
  if (card) openProject(card.dataset.project);
});
grid.addEventListener("keydown", event => {
  const card = event.target.closest(".project-card");
  if (card && (event.key === "Enter" || event.key === " ")) openProject(card.dataset.project);
});
document.querySelectorAll("[data-open-project]").forEach(button => {
  button.addEventListener("click", () => openProject(button.dataset.openProject));
});
document.querySelector("[data-print-portfolio]")?.addEventListener("click", () => window.print());
document.querySelector(".modal-close").addEventListener("click", closeProject);
modal.addEventListener("click", event => {
  if (event.target === modal) closeProject();
});
modal.addEventListener("cancel", event => {
  event.preventDefault();
  closeProject();
});
modal.addEventListener("animationend", event => {
  if (event.target === modal && event.animationName === "project-zoom-out-in") {
    modal.classList.remove("project-opening");
  }
});
modal.addEventListener("scroll", () => {
  if (parallaxFrame) return;
  parallaxFrame = requestAnimationFrame(() => {
    const background = modalContent.querySelector(".project-document-background");
    if (background) {
      const scrollRange = Math.max(modal.scrollHeight - modal.clientHeight, 1);
      const scrollProgress = modal.scrollTop / scrollRange;
      const travel = Math.min(scrollProgress * 36, 36);
      background.style.setProperty("--cover-parallax-y", `${-travel}px`);
    }
    updateProjectNavigator();
    parallaxFrame = null;
  });
}, { passive: true });
modal.addEventListener("close", () => {
  if (projectCloseTimer) clearTimeout(projectCloseTimer);
  projectCloseTimer = null;
  if (parallaxFrame) cancelAnimationFrame(parallaxFrame);
  parallaxFrame = null;
  projectCloseSnapshot?.remove();
  projectCloseSnapshot = null;
  modal.classList.remove("project-opening", "project-closing");
  document.body.classList.remove("project-active", "project-returning");
  document.querySelectorAll(".project-page-scene").forEach(element => {
    element.classList.remove("project-page-scene");
    element.style.removeProperty("--project-scene-origin-y");
  });
  document.body.style.overflow = "";
});

const themeButton = document.querySelector(".theme-toggle");
themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeButton.querySelector(".theme-icon").textContent = document.body.classList.contains("dark") ? "☾" : "☼";
  themeButton.classList.remove("switching");
  requestAnimationFrame(() => themeButton.classList.add("switching"));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    entry.target.classList.toggle("visible", entry.isIntersecting);
  });
}, { threshold: .12 });
document.querySelectorAll(".reveal").forEach((element, index) => {
  element.style.setProperty("--reveal-delay", `${Math.min(index % 4, 3) * 70}ms`);
  observer.observe(element);
});

document.querySelectorAll(".project-card").forEach(card => {
  card.addEventListener("pointermove", event => {
    if (reduceMotion.matches || event.pointerType === "touch") return;
    const bounds = card.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - .5;
    const y = (event.clientY - bounds.top) / bounds.height - .5;
    card.style.setProperty("--tilt-x", `${y * -4}deg`);
    card.style.setProperty("--tilt-y", `${x * 5}deg`);
  });
  card.addEventListener("pointerleave", () => {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  });
});

const navLinks = [...document.querySelectorAll(".desktop-nav a")];
const sections = navLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);
let scrollFrame;

function updateScrollEffects() {
  const scrollTop = window.scrollY;
  const scrollRange = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  progress.style.setProperty("--scroll-progress", `${scrollTop / scrollRange * 100}%`);
  const current = [...sections].reverse().find(section => scrollTop >= section.offsetTop - 180) || sections[0];
  navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current.id}`));
  scrollFrame = null;
}

window.addEventListener("scroll", () => {
  if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScrollEffects);
}, { passive: true });
updateScrollEffects();
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    document.body.classList.add("hero-background-ready");
  });
});

window.addEventListener("pointermove", event => {
  if (reduceMotion.matches) return;
  document.body.style.setProperty("--pointer-x", `${event.clientX}px`);
  document.body.style.setProperty("--pointer-y", `${event.clientY}px`);
}, { passive: true });
