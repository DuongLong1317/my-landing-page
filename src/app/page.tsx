import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-[0_10px_30px_rgba(0,88,187,0.08)]">
        <div className="flex justify-between items-center px-8 h-20 w-full max-w-7xl mx-auto">
          <div className="text-2xl md:text-3xl font-black text-[#0058bb] tracking-tighter">SHOKUNIN</div>
          <div className="hidden md:flex items-center gap-8 font-headline font-bold tracking-tight">
            <a className="text-[#0058bb] border-b-2 border-[#0058bb] pb-1" href="#">Kinh nghiệm</a>
            <a className="text-[#2c2f30] hover:text-[#0058bb] transition-colors hover:bg-blue-50 rounded-full px-3 py-1" href="#">Dịch vụ</a>
            <a className="text-[#2c2f30] hover:text-[#0058bb] transition-colors hover:bg-blue-50 rounded-full px-3 py-1" href="#">Dự án</a>
            <a className="text-[#2c2f30] hover:text-[#0058bb] transition-colors hover:bg-blue-50 rounded-full px-3 py-1" href="#">Liên hệ</a>
          </div>
          <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold hover:bg-primary-dim active:scale-95 transition-all">
            Đặt lịch tư vấn
          </button>
        </div>
      </nav>
      
      <main className="pt-20">
        <section className="relative min-h-[921px] flex items-center overflow-hidden bg-gradient-to-br from-white via-surface-container-low to-secondary-container/20">
          <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-secondary font-bold text-sm">
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                10 NĂM KINH NGHIỆM F&amp;B
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-on-surface leading-snug md:leading-relaxed tracking-tight break-words">
                KIẾN TẠO TƯƠNG LAI <span className="text-primary">ẨM THỰC CAO CẤP</span> CHO TRẺ EM
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-on-surface-variant leading-relaxed max-w-xl">
                Chuyên gia F&amp;B tư vấn thiết kế thực đơn sushi, kimbap và sandwich nghệ thuật, giàu dinh dưỡng cho thế hệ thực thần nhí.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:primary-dim transition-all">
                  Khám phá dự án
                </button>
                <button className="bg-white text-primary border-2 border-primary/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-all">
                  Tìm hiểu thêm
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-container/30 rounded-full blur-3xl opacity-50"></div>
              <div className="relative rounded-lg overflow-hidden aspect-[4/5] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                <img alt="Portrait of professional female chef" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKGUQRwfQjoSrmO5VS5OgccTsUJ-NZOBNz6NgPRk_1W4Zw3aK3_sM0mpvYjzVUZg-214bhgnW5fxJojoCcVdFkvqg_B1PhJJ-I3QjiK_rJ6AplOFEHBHYr-CPLUpGiJyBXwNGmzoan4ZiBu_xsvRaHIYaA9mRBTjEfoH2GajW6l_Lh91TEDYv2Awq5FVxYZ-Kc5npwm-PGuC-Alq4FasGSDDVWF7VNZV2pyLCaRb0K72XPN-4L-lhwSVRJ9a16P6O7eweWwoXjgkI" />
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 backdrop-blur-md rounded-2xl border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-primary">Founder of Shokunin</p>
                      <p className="text-lg font-black text-on-surface">CHUYÊN GIA F&amp;B TRẺ EM</p>
                    </div>
                    <div className="bg-secondary p-3 rounded-full text-white">
                      <span className="material-symbols-outlined">restaurant_menu</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="h-64 rounded-lg bg-surface-container-high overflow-hidden shadow-inner">
                      <img alt="Chef working with kids" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaAj_ckvHE4VZt9afrPBcE8mEZcp5gPhUziPDujUBuPiYc2MCAwhaHGEQ7dIJkJSMewNHbR41VohhW3Hebf2AGcy83QuAQ-STdILgleucLbGUVY5LH5X8AraXymKZz-Z1wCtUJ4HsIvlCXvewCOCYbvm8i_mnFTXM_r_rY5hz6UDJ0aHB4q8kDYEgCJqcwY8ciio1BUxqugzxHdPt29jCoG0b5Fe8fppo34n_cmxAfbh-j_lnozoaO1-cwmGkspctxdh2fgRms5kA" />
                    </div>
                    <div className="h-48 rounded-lg bg-secondary-container/20 flex items-center justify-center p-8 text-center">
                      <h3 className="text-4xl font-black text-secondary">500+</h3>
                      <p className="text-sm font-bold text-on-surface-variant mt-2 uppercase">Thực đơn thiết kế</p>
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="h-48 rounded-lg bg-primary/10 flex items-center justify-center p-8 text-center">
                      <h3 className="text-4xl font-black text-primary">10Y</h3>
                      <p className="text-sm font-bold text-on-surface-variant mt-2 uppercase">Hành trình sáng tạo</p>
                    </div>
                    <div className="h-64 rounded-lg bg-surface-container-high overflow-hidden shadow-inner">
                      <img alt="Gourmet kid dish" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXrUqWMcGpGJ4xOUh9zIGTtdLwNfhXYk_S33naFRSZr8jPJ_wBe3tDvnKTKN6nJoW2mXAZhVQpy6JaX7a54re3iE2UP9pzp0wL4IkXz-n6-2-r-0rZPwTPxL7bV5MuZg6iCSeN5gN-78O7FB4d04s11sLAd_pbdv1ANZTSGIegNrDLm1dCwlxjmp0twPS5K3QclY3W5lbsv6h4DGmjjT7TkYreJVRZBhmOHhlyWbuVHRBvlaKONYTovAy7vIXEvMC7NtlOe2ekdcQ" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="text-sm font-bold tracking-widest text-primary uppercase">Câu chuyện của tôi</h2>
                <h3 className="text-4xl md:text-5xl font-extrabold text-on-surface leading-tight">10 năm nâng tầm bữa ăn cho gia đình Việt</h3>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  Bắt đầu hành trình từ niềm đam mê với nghệ thuật ẩm thực Nhật Bản, tôi nhận ra khoảng trống lớn trong thực đơn dành cho trẻ em tại Việt Nam.
                </p>
                <p className="text-lg text-on-surface-variant leading-relaxed">
                  Với kinh nghiệm làm việc cùng các chuỗi nhà hàng lớn và trường mầm non quốc tế, tôi mang đến giải pháp F&amp;B toàn diện cho các doanh nghiệp.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface">Dịch vụ chuyên nghiệp</h2>
              <p className="text-lg text-on-surface-variant">Giải pháp sáng tạo giúp thương hiệu của bạn nổi bật trong thị trường F&amp;B sôi động.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: "set_meal", title: "Gourmet Sushi & Kimbap", desc: "Thiết kế menu sushi và kimbap nghệ thuật, tập trung vào nguyên liệu cao cấp.", color: "primary" },
                { icon: "lunch_dining", title: "Junior Gastronomy", desc: "Nghệ thuật Sandwich Design biến những lát bánh mì đơn điệu thành tác phẩm đầy màu sắc.", color: "secondary" },
                { icon: "strategy", title: "Tư vấn chiến lược F&B", desc: "Định hướng mô hình kinh doanh nhắm đến đối tượng gia đình, tối ưu hóa trải nghiệm.", color: "tertiary" },
                { icon: "precision_manufacturing", title: "Vận hành sáng tạo", desc: "Đào tạo đội ngũ bếp thực thi các thực đơn nghệ thuật với quy chuẩn vệ sinh chuẩn nhà hàng.", color: "on-surface" },
              ].map((s, i) => (
                <div key={i} className={`bg-surface-container-lowest p-8 rounded-lg shadow-sm hover:shadow-xl transition-all border-b-4 border-${s.color} group`}>
                  <div className={`w-16 h-16 bg-${s.color}/10 rounded-2xl flex items-center justify-center text-${s.color} mb-6 group-hover:scale-110 transition-transform`}>
                    <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'FILL' 1" }}>{s.icon}</span>
                  </div>
                  <h4 className="text-xl font-bold mb-4">{s.title}</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-surface-container-low">
          <div className="max-w-7xl mx-auto px-8">
            <div className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 lg:p-16 space-y-8 bg-primary text-on-primary">
                <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Hãy cùng kiến tạo!</h2>
                <p className="text-lg opacity-90 leading-relaxed">Bạn đang ấp ủ một dự án F&amp;B cho gia đình? Hãy chia sẻ ý tưởng, tôi sẽ giúp bạn biến nó thành hiện thực.</p>
                <div className="space-y-6 pt-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined">mail</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold opacity-70 uppercase">Email</p>
                      <p className="text-xl font-bold">hello@shokunin.vn</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <span className="material-symbols-outlined">call</span>
                    </div>
                    <div>
                      <p className="text-sm font-bold opacity-70 uppercase">Điện thoại</p>
                      <p className="text-xl font-bold">+84 901 234 567</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12 lg:p-16 bg-white">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface-variant">Họ và tên</label>
                      <input className="w-full bg-surface-container px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-primary transition-all" placeholder="Nguyễn Văn A" type="text" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-on-surface-variant">Email</label>
                      <input className="w-full bg-surface-container px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-primary transition-all" placeholder="email@example.com" type="email" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-on-surface-variant">Lời nhắn</label>
                    <textarea className="w-full bg-surface-container px-6 py-4 rounded-xl border-none focus:ring-2 focus:ring-primary transition-all" placeholder="Mô tả ngắn về dự án của bạn..." rows={4}></textarea>
                  </div>
                  <button className="w-full bg-primary text-on-primary py-5 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:bg-primary-dim transition-all active:scale-95">
                    Gửi yêu cầu tư vấn
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#f5f6f7] w-full py-12 px-8 border-t border-slate-200/20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="space-y-4">
            <div className="text-xl font-bold text-[#0058bb]">SHOKUNIN</div>
            <p className="text-slate-500 max-w-xs">Nâng tầm trải nghiệm ẩm thực gia đình qua bàn tay nghệ nhân và tư duy chiến lược hiện đại.</p>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-on-surface">Khám phá</h5>
            <div className="flex flex-col gap-2 text-sm">
              <a className="text-slate-500 hover:text-[#0058bb] hover:underline transition-all" href="#">Kinh nghiệm</a>
              <a className="text-slate-500 hover:text-[#0058bb] hover:underline transition-all" href="#">Dịch vụ</a>
              <a className="text-slate-500 hover:text-[#0058bb] hover:underline transition-all" href="#">Dự án nghệ thuật</a>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-bold text-on-surface">Liên hệ</h5>
            <div className="flex gap-4">
              <a className="text-slate-500 hover:text-[#0058bb] transition-all" href="#">Instagram</a>
              <a className="text-slate-500 hover:text-[#0058bb] transition-all" href="#">LinkedIn</a>
              <a className="text-slate-500 hover:text-[#0058bb] transition-all" href="#">Email</a>
            </div>
            <p className="text-xs text-slate-400 mt-4">© 2024 SHOKUNIN. Bảo lưu mọi quyền.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
