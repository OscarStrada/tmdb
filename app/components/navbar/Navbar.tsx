"use client";

import { useState } from "react";
import { MainNavItem } from "@/types";
import Link from "next/link";

import NavItem from "./NavItem";
import MobileNav from "./MobileNav";
import Logo from "../logo";
import { Icons } from "@/components/ui/icons";

interface Props {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const Navbar = ({ items, children }: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="flex justify-between md:justify-start gap-6 md:gap-10">
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
