"use client";

import Link from "next/link";
import { navMenuConfigData } from "@/config/nav.config";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import ProductNavMenu from "./product-nav-menu";

export default function NavMenu() {
  // const [showInfo, setShowInfo] = useState(true);
  // const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      {navMenuConfigData?.length ? (
        <nav className="hidden md:flex ">
          {navMenuConfigData?.map((item, index) => (
            <div
              key={index}
              onMouseOver={index === 1 ? () => setShowDropdown(true) : null}
              onMouseLeave={index === 1 ? () => setShowDropdown(false) : null}
              className="p-1 flex"
            >
              <Link
                href={item.href}
                target={`${item.blank ? "_blank" : "_self"}`}
                // onClick={(e) => {
                //   // e.preventDefault();
                //   // setShowDropdown(false);
                // }}
                className="py-4 px-4 hover:text-[#8A40F5] flex items-center"
              >
                {item.title}

                {item.arrow && <IoIosArrowDown className="text-[12px] ml-1" />}
              </Link>
            </div>
          ))}
        </nav>
      ) : null}

      <ProductNavMenu
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />
    </>
  );
}
