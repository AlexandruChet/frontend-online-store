import React, { type JSX } from "react";
import Link from "next/link";
import "./navbar.scss";
import { NavLinkItem } from "./interfaceNavbar";

interface NavbarParameters {
  logo?: JSX.Element;
  isOpen: boolean;
  toggleMenu: () => void;
  body: NavLinkItem[];
  menuRef: React.RefObject<HTMLDivElement | null>;
}


const HeaderNavbar: React.FC<NavbarParameters> = ({
  logo,
  isOpen,
  toggleMenu,
  body,
  menuRef,
}) => {
  return (
    <nav className="navbar" ref={menuRef}>
      <div className="logo">{logo || "Logo"}</div>

      <button
        className={`burger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
        {body.map((link) => (
          <li key={link.href}>
            <Link href={link.href} onClick={toggleMenu}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavbar;
