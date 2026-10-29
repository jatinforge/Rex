export const Header = () => (
  <header className="fixed top-0 w-full bg-white border-b border-[#cccccc] z-50">
    <div className="max-w-[600px] mx-auto px-5 h-16 flex justify-between items-center">
      <a href="/" className="font-['Georgia'] font-bold text-lg">R.E.X</a>
      <nav className="flex gap-6 text-[14px]">
        <a href="#games">Games</a>
        <a href="#studio">Studio</a>
        <a href="mailto:rex.forge.777@gmail.com?subject=Hello%20R.E.X%20Games">Contact</a>
      </nav>
    </div>
  </header>
);
