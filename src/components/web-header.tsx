"use client";

import { useState } from "react";
import Hotline from "./hotline";
import Logo from "./logo";
import NavMenu from "./nav-menu";
import NavMenuHamburger from "./nav-menu-hamburger";
import NavMenuMobile from "./nav-menu-mobile";
import ProductNavMenu from "./product-nav-menu";

export default function WebHeader() {
  const [showNav, setShowNav] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="sticky z-40 top-0 text-center bg-white transition-transform ease-in-out duration-300 md:duration-700 border-b border-[#ededed]">
      <div className="py-2 sticky z-40 top-0 text-center bg-white">
        <div className="container flex justify-between items-center">
          <div className="flex items-center">
            <Logo />
            <NavMenu
              setShowDropdown={setShowDropdown}
              showDropdown={showDropdown}
            />
            <ProductNavMenu
              showDropdown={showDropdown}
              setShowDropdown={setShowDropdown}
            />
          </div>

          <NavMenuHamburger setShowNav={setShowNav} showNav={showNav} />

          <Hotline />

          {showNav && (
            <NavMenuMobile showNav={showNav} setShowNav={setShowNav} />
          )}
        </div>
      </div>
    </header>
  );
}
