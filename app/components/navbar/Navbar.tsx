"use client";

import { useState } from "react";
import { MainNavItem } from "@/types";
import Link from "next/link";

import { ModeToggle } from "@/components/ui/modeToggle";
import { NavItem, MobileNav, Logo } from "./index";
import { Icons } from "@/components/ui/icons";
// import LanguageSelector from "../languageSelector/LanguageSelector";

interface Props {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const Navbar = ({ items, children }: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-6 md:gap-10">
        <Link href={"/"}>
          <Logo />
        </Link>

        {items?.length ? (
          <nav className="hidden gap-6 md:flex">
            {items?.map((item) => (
              <NavItem
                key={item.title}
                title={item.title}
                href={item.href}
                disabled={item.disabled}
              />
            ))}
          </nav>
        ) : null}
      </div>

      <div className="hidden md:flex gap-4 items-center">
        {/* <LanguageSelector /> */}
        <ModeToggle />
      </div>

      <button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        <Icons.menuIcon />
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </header>
  );
};

export default Navbar;
