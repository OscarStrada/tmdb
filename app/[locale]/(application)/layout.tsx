import { Navbar } from "@/app/components";
import { siteConfig } from "@/config/site";

interface Props {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="container z-40 bg-background border-b py-4">
        <Navbar items={siteConfig.mainNav} />
      </div>

      <main className="flex-1">{children}</main>
    </div>
  );
};

export default AppLayout;
