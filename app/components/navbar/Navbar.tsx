"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { MainNavItem } from "@/types";

import NavItem from "./NavItem";
import Logo from "../logo";

interface Props {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const Navbar = ({ items, children }: Props) => {
  const segment = useSelectedLayoutSegment();
  return (
    <header className="flex gap-6 md:gap-10">
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
    </header>
  );
};

export default Navbar;
