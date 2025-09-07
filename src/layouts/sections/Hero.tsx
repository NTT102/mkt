const Hero = () => {
    return (
        <section className="w-full h-[42.75rem] bg-[url('/assets/hero.gif')] bg-cover bg-no-repeat">
            <div className="w-full h-full flex items-center bg-slate-800 opacity-80">
                <div className="max-w-[60rem] mx-auto p-4 grid gap-8">
                    <h2 className="uppercase text-5xl text-yellow-300 font-bold">
                        EC MARKET
                    </h2>
                     <p className="text-white font-medium first-letter:uppercase">
                        EC Markets là một trong những sàn giao dịch quốc tế uy tín, được cấp phép bởi nhiều cơ quan tài chính lớn, mang đến môi trường minh bạch và an toàn cho nhà đầu tư. Với spread thấp từ 0.0 pips, tốc độ khớp lệnh cực nhanh chỉ vài mili-giây, nền tảng MT4/MT5 hiện đại cùng hơn 100 sản phẩm giao dịch đa dạng (Forex, vàng, dầu, chỉ số, crypto…), EC Markets phù hợp cho cả người mới bắt đầu lẫn trader chuyên nghiệp. Đây là lựa chọn đáng tin cậy cho những ai tìm kiếm sự ổn định, bảo mật và hiệu quả trong từng giao dịch. !! 
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
