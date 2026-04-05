"use client";

import Link from "next/link";
import Logo from "@/public/shop_logo.svg";
import { useState, useEffect, useRef } from "react";
import { navLinks } from "../Dates/navigation";
import Navbar from "@/src/shared/ui/navbar";
import Image from "next/image";

function Header() {
  const [burgerMenuState, setBurgerMenuState] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleMenu = () => setBurgerMenuState((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        burgerMenuState &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node)
      ) setBurgerMenuState(false);
    };

    if (burgerMenuState)
      document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [burgerMenuState]);

  return (
    <header className="header">
      <Navbar
        isOpen={burgerMenuState}
        toggleMenu={toggleMenu}
        body={navLinks}
        menuRef={menuRef}
        logo={
          <div className="header__logo">
            <Link href="/">
              <Image
                src={Logo}
                alt="website logo"
                className="header__logo-img"
                width={40}
                height={40}
              />
            </Link>
            <h1 className="header__logo-title">Online Shop</h1>
          </div>
        }
      />
    </header>
  );
}

export default Header;
