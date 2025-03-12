import WebFooter from "@/components/web-footer";
import WebHeader from "@/components/web-header";
import React, { FC } from "react";
import "@/styles/styles.css";
interface WebLayoutProps {
  children: React.ReactNode;
}

const WebLayout: FC<WebLayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <WebHeader />
      {/* <WebNav items={webNavConfig} productNav={productNavConfig} /> */}
      <main className="flex-1">{children}</main>
      <WebFooter />
    </div>
  );
};

export default WebLayout;
