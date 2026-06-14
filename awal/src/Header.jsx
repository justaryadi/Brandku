const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-white border-b">
      <nav className="w-full bg-white px-8 md:px-16 py-5 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
        <div className="text-blue-600 font-extrabold text-xl tracking-tight">
          BrandKu
        </div>
        <div className="flex space-x-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-slate-900 transition-colors">Beranda</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Fitur</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Harga</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;