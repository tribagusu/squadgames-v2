import { FC, SetStateAction, Dispatch, useState } from "react";
import Link from "next/link";
import { BiSolidDownArrow } from "react-icons/bi";
import { navMenuConfigData } from "@/config/nav.config";

type NavMenuMobileProps = {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
};

const NavMenuMobile: FC<NavMenuMobileProps> = ({ setShowNav, showNav }) => {
  const [showProductNav, setShowProductNav] = useState(false);

  return (
    <div className="container bg-white absolute top-[100%] left-0 w-full h-screen z-50">
      {navMenuConfigData?.length ? (
        <nav className={`flex flex-col w-full h-screen cursor-pointer py-2 `}>
          {navMenuConfigData?.map((item, index) => (
            <div key={index}>
              {index === 1 ? (
                <div>
                  <button
                    onClick={() => setShowProductNav(!showProductNav)}
                    className="flex items-center justify-between my-0 mx-auto w-full py-3 border-b border-[#ddd]
                "
                  >
                    {item.title}{" "}
                    <span className="text-[12px] text-gray-600">
                      <BiSolidDownArrow />
                    </span>
                  </button>
                  {showProductNav && (
                    <div>
                      {item.products?.map((product, index) => (
                        <Link
                          key={index}
                          href={`/product/${product.href}`}
                          target={`${item.blank ? "_blank" : "_self"}`}
                          className="flex items-center my-0 mx-auto w-full pl-6 py-2 border-b border-[#ddd] hover:text-[#7D25F0]"
                          onClick={() => setShowNav(false)}
                        >
                          {product.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  target={`${item.blank ? "_blank" : "_self"}`}
                  className={`flex items-center my-0 mx-auto w-full py-3 border-b border-[#ddd]`}
                  onClick={() => setShowNav(false)}
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>
      ) : null}
    </div>
  );
};

export default NavMenuMobile;
