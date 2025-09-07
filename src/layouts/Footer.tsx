

const Footer = () => {
    return (
        <footer className="bg-slate-800 text-white px-4 py-8">
             <div className="max-w-[60rem] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 border-b border-slate-500 pb-6">
                    <div className="w-[8.625rem]">
                        <img
                            className="w-full h-auto object-cover"
                            src={Logo}
                            alt="Logo"
                        />
                    </div>
                    
                </div>
                <p className="text-center font-medium text-slate-500 mt-6">
                    &copy; Allrights reserved Legend Group
                </p>
            </div>
        </footer>
    );
};

export default Footer;
