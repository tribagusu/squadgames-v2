import Hotline from "./hotline";
import Logo from "./logo";
import NavMenu from "./nav-menu";

export default function WebHeader() {
  return (
    <header className="sticky z-40 top-0 text-center bg-white transition-transform ease-in-out duration-300 md:duration-700 border-b border-[#ededed]">
      <div className="py-2 sticky z-40 top-0 text-center bg-white;">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <NavMenu />
          </div>

          <Hotline />
        </div>
      </div>
    </header>
  );
}
