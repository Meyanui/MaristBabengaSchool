import { ReactNode } from "react";
import Navigation from "./Navigation";
import SchoolHeader from "./SchoolHeader";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <SchoolHeader />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
