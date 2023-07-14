import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { cn } from "@/lib/utils";

type Props = {
  title: string;
  href: string;
  disabled?: boolean;
};

const NavItem = ({ title, href, disabled }: Props) => {
  const segment = useSelectedLayoutSegment();

  return (
    <Link
      key={title}
      href={disabled ? "#" : href}
      className={cn(
        "flex items-center text-lg font-medium hover:text-foreground/80 sm:text-sm",
        href.startsWith(`/${segment}`)
          ? "text-foreground"
          : "text-foreground/60",
        disabled && "cursor-not-allowed opacity-80"
      )}
    >
      {title}
    </Link>
  );
};

export default NavItem;
