import { AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";

export default function NavMenuHamburger({ setShowNav, showNav }) {
  return (
    <div className="bg-transparent w-10 h-10 flex justify-center items-center">
      <button
        className="text-[#8A40F5] text-2xl p-2 md:hidden"
        onClick={() => setShowNav(!showNav)}
      >
        {showNav ? <AiOutlineClose /> : <FiMenu />}
      </button>
    </div>
  );
}
