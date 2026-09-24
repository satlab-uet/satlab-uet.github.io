import React, { useState } from 'react';
import { Icon } from '../components/Icon';

export const BookPage: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const bibtex = `@book{satlab2026monograph,
  title     = {Biểu diễn SAT tối ưu cho các bài toán tối ưu hóa tổ hợp},
  author    = {Tô Văn Khánh and Kiều Văn Tuyên and Trương Xuân Hiếu and Vũ Thanh Hường and Đào Xuân Nghĩa and Nguyễn Kim Trung Đức},
  publisher = {Nhóm Nghiên cứu SATLab, Trường Đại học Công nghệ, Đại học Quốc gia Hà Nội (UET-VNU)},
  year      = {2026},
  pages     = {116},
  url       = {https://satlab-uet.github.io/read.html}
}`;

  const handleCopyBibtex = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const chapters = [
    { number: 'Chương 1', title: 'Giới thiệu chung', desc: 'Bối cảnh nghiên cứu, vai trò của công nghệ SAT trong khoa học máy tính hiện đại và tổng quan cấu trúc chuyên khảo.' },
    { number: 'Chương 2', title: 'Logic mệnh đề và bài toán SAT', desc: 'Dạng chuẩn hội CNF, giải thuật DPLL, CDCL (Conflict-Driven Clause Learning), học mệnh đề và quy trình lan truyền đơn nguyên.' },
    { number: 'Chương 3', title: 'Các kỹ thuật biểu diễn ràng buộc cơ bản', desc: 'Ràng buộc At-Most-One (AMO), At-Least-One (ALO), Exactly-One (EO): mã hóa trực tiếp, mã hóa logarit, mã hóa bộ đếm tuần tự.' },
    { number: 'Chương 4', title: 'Ràng buộc lực lượng và các kỹ thuật mã hóa nâng cao', desc: 'Ràng buộc At-Most-K (AMK), At-Least-K (ALK), Totalizer, Sorting Networks và mạng đếm nhị phân.' },
    { number: 'Chương 5', title: 'Kỹ thuật bộ đếm tuần tự mới (NSC) cho ràng buộc lực lượng', desc: 'Bộ đếm tuần tự mới New Sequential Counter (NSC) cho ràng buộc hình thang/bậc thang, tối ưu số lượng biến và mệnh đề phụ trợ.' },
    { number: 'Chương 6', title: 'Bài toán xếp hình hai chiều (2D Strip Packing Problem)', desc: 'Mô hình hóa hình học phi trùng lặp, ràng buộc quan hệ tương đối, tìm kiếm nhị phân chiều cao và đánh giá thực nghiệm với CPLEX.' },
    { number: 'Chương 7', title: 'Bài toán đóng thùng hai chiều (2D Bin Packing Problem)', desc: 'Biểu diễn ràng buộc phân bố thùng, phá vỡ tính đối xứng (symmetry breaking) và so sánh toàn diện với CP-SAT và MIP.' },
    { number: 'Chương 8', title: 'Bài toán cân bằng chuyền lắp ráp tối thiểu hóa công suất đỉnh', desc: 'Mô hình hóa SALBP với giới hạn tiêu thụ điện năng đỉnh, kỹ thuật tích lũy thời gian thực và cân bằng phụ tải.' },
    { number: 'Chương 9', title: 'Bài toán lập lại lịch trình tàu hỏa (Train Rescheduling)', desc: 'Khung giải MaxSAT-DDD kết hợp lan truyền tiền định với phân rã miền động trên mạng lưới đường sắt đơn và đa tuyến.' },
    { number: 'Chương 10', title: 'Bài toán gán nhãn đồ thị khoảng cách và phân bổ tần số', desc: 'Antibandwidth, Cyclic Antibandwidth (COAP Q1 ISI), Radio-k Labeling, Bandwidth Multicoloring và Minimum Order FAP.' },
    { number: 'Chương 11', title: 'Kết luận và định hướng tương lai', desc: 'Đánh giá tổng kết, phân tích so sánh hiệu năng và các bài toán mở trong biểu diễn SAT/SMT/MaxSAT.' },
  ];

  return (
    <div className="section-shell py-10 sm:py-14 animate-in fade-in duration-300">
      {/* Header Banner */}
      <div className="max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-sky-300/80 bg-sky-50 px-3.5 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-sky-900 mb-4">
          <Icon name="auto_stories" className="h-3.5 w-3.5 text-sky-700" />
          <span>Ấn bản chuyên khảo học thuật chính thức</span>
        </div>
        <h1 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-slate-950 leading-tight">
          Biểu diễn SAT tối ưu cho các bài toán tối ưu hóa tổ hợp
        </h1>
        <p className="mt-4 font-editorial text-lg text-slate-600 leading-relaxed max-w-3xl">
          Công trình chuyên khảo học thuật dài 116 trang do Nhóm Nghiên cứu SATLab UET biên soạn,
          cung cấp hướng dẫn toàn diện từ nền tảng lý thuyết mệnh đề đến kỹ nghệ biểu diễn tối ưu
          cho các bài toán tối ưu hóa tổ hợp kinh điển và ứng dụng công nghiệp thực tế.
        </p>
      </div>

      {/* Main Feature Card */}
      <div className="mt-10 rounded-3xl border border-sky-200/90 bg-gradient-to-br from-white via-sky-50/50 to-cyan-50/30 p-8 sm:p-10 shadow-soft">
        <div className="grid gap-10 lg:grid-cols-[1fr_320px] items-center">
          <div>
            <div className="space-y-4 font-editorial text-sm text-slate-700 leading-relaxed">
              <p>
                Cuốn sách là kết tinh từ các công trình nghiên cứu được công bố trên các tạp chí quốc tế hàng đầu
                (Computational Optimization and Applications, RAIRO - Operations Research, Cybernetics and Information Technologies,
                Pesquisa Operacional, Journal of Combinatorial Optimization) của nhóm nghiên cứu SATLab, Trường Đại học Công nghệ, ĐHQGHN.
              </p>
              <p>
                Đặc biệt, bản thảo được chuẩn hóa tỉ mỉ về mặt thuật ngữ tiếng Việt (sử dụng <strong>“biểu diễn”</strong> thống nhất cho <em>encoding</em>,
                chuyển hóa chính xác các khái niệm tối ưu hóa tổ hợp) và kiểm chứng 100% qua quy trình biên dịch tự động LaTeX/LuaLaTeX CI/CD.
              </p>
            </div>

            {/* Quick Metadata Stats */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-xs">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Số trang</span>
                <span className="text-base font-extrabold text-slate-900">116 Trang</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-xs">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Số chương</span>
                <span className="text-base font-extrabold text-sky-800">11 Chương</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-xs">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Định dạng</span>
                <span className="text-base font-extrabold text-emerald-800">PDF &amp; HTML</span>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-3 text-center shadow-xs">
                <span className="block text-slate-400 text-[10px] uppercase font-bold">Truy cập</span>
                <span className="text-base font-extrabold text-amber-800">Open Access</span>
              </div>
            </div>

            {/* Download and Read CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="./read.html"
                className="inline-flex items-center gap-2 rounded-2xl bg-sky-900 px-6 py-3.5 font-editorial text-sm font-bold text-white shadow-lift hover:bg-sky-950 transition hover:-translate-y-0.5 focus-ring"
              >
                <Icon name="menu_book" className="h-4 w-4 text-cyan-300" />
                <span>Đọc bản trực tuyến (Online HTML Reader) ↗</span>
              </a>

              <a
                href="./downloads/sat-book.pdf"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-5 py-3.5 font-editorial text-sm font-bold text-slate-800 shadow-xs hover:bg-slate-50 transition hover:-translate-y-0.5 focus-ring"
              >
                <Icon name="download" className="h-4 w-4 text-sky-700" />
                <span>Tải toàn văn PDF (106 trang)</span>
              </a>

              <a
                href="./downloads/sat-book-tex.zip"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-4 py-3.5 font-editorial text-xs font-semibold text-slate-700 shadow-xs hover:bg-slate-50 transition hover:-translate-y-0.5"
              >
                <Icon name="folder_zip" className="h-4 w-4 text-slate-500" />
                <span>Mã nguồn LaTeX (ZIP)</span>
              </a>
            </div>
          </div>

          {/* Book Cover Visual */}
          <div className="flex flex-col items-center">
            <a href="./read.html" className="group block">
              <img
                src="./assets/images/book-cover.webp"
                alt="Bìa sách Biểu diễn SAT tối ưu cho các bài toán tối ưu hóa tổ hợp"
                className="h-80 w-auto rounded-2xl object-cover shadow-2xl ring-1 ring-slate-900/10 transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="mt-3 font-mono text-[11px] text-slate-500 text-center">
              Ấn bản lưu hành nội bộ &amp; nghiên cứu khoa học · UET-VNU
            </p>
          </div>
        </div>
      </div>

      {/* Table of Contents Section */}
      <section className="mt-16">
        <div className="max-w-3xl mb-8">
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-sky-700">
            STRUCTURE &amp; SYLLABUS
          </p>
          <h2 className="mt-1 font-editorial text-3xl font-bold text-slate-950">
            Mục lục chuyên khảo (11 Chương)
          </h2>
          <p className="mt-2 font-editorial text-base text-slate-600">
            Hành trình từ lý thuyết mệnh đề đến các bài toán công nghiệp và gán nhãn đồ thị phức tạp.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {chapters.map((ch, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200/80 bg-white/90 p-5 shadow-xs backdrop-blur-sm hover:border-sky-300 transition"
            >
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-sky-700 mb-1">
                <span>{ch.number}</span>
              </div>
              <h3 className="font-editorial text-base font-bold text-slate-950">
                {ch.title}
              </h3>
              <p className="mt-1.5 font-editorial text-xs text-slate-600 leading-relaxed">
                {ch.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* BibTeX Citation Box */}
      <section className="mt-16 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-xs">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h3 className="font-editorial text-base font-bold text-slate-950">
            Trích dẫn chuyên khảo (BibTeX)
          </h3>
          <button
            type="button"
            onClick={handleCopyBibtex}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1 font-mono text-xs font-semibold transition ${
              copied
                ? 'bg-emerald-100 text-emerald-800'
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            <Icon name={copied ? 'check' : 'content_copy'} className="h-3.5 w-3.5" />
            <span>{copied ? 'Đã sao chép!' : 'Sao chép BibTeX'}</span>
          </button>
        </div>
        <pre className="overflow-x-auto rounded-xl bg-slate-900 p-4 font-mono text-xs text-sky-200 leading-relaxed">
          {bibtex}
        </pre>
      </section>
    </div>
  );
};
