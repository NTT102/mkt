const Hero = () => {
    return (
        <section className="w-full h-[42.75rem] bg-[url('/assets/hero.gif')] bg-cover bg-no-repeat">
            <div className="w-full h-full flex items-center bg-slate-800 opacity-80">
                <div className="max-w-[60rem] mx-auto p-4 grid gap-8">
                    <h2 className="uppercase text-5xl text-yellow-300 font-bold">
                        Marketing Online
                    </h2>
                     <p className="text-white font-medium first-letter:uppercase">
                        Với hơn 10 năm kinh nghiệm trong lĩnh vực MMO, Tuy sẽ không theo lý thuyết hay sách vở gì cả nhưng những cái gì e chia sẻ ở đây là những mẹo mà e đúc kết lại được để chia sẻ cho mọi người có 1 cái nhìn tổng quan cũng như có kinh nghiệm về MKT đa nền tảng để chiến được mọi ngành nghề lĩnh vực khác nhau !! 
                    </p>
                    <p className="text-white font-medium first-letter:uppercase">
                         ** Khi tham gia cuộc chơi nào đó, bạn phải hiểu rõ luật chơi , sau đó hãy làm sao để là người chơi tốt nhất **
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
