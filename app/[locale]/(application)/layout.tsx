import { Navbar } from "@/app/components";
import { siteConfig } from "@/config/site";

interface Props {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: Props) => {
  return (
    <div className="container z-40 bg-background border-b py-4">
      <Navbar items={siteConfig.mainNav} />
    </div>
  );
};

export default AppLayout;
