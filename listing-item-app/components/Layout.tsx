import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="flex flex-col min-h-screen">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <nav className="absolute top-[50px] right-[100px] z-10 w-[100px] h-[180px] bg-black p-1 shadow-md grid text-gray-200">
        <Link className="p-1 text-sm hover:text-blue-400" href="/">Home</Link>
        <Link className="p-1 text-sm hover:text-blue-400" href="/layoutCenter">Center</Link>
        <Link className="p-1 text-sm hover:text-blue-400" href="/layoutDashboard">Dashboard</Link>
        <Link className="p-1 text-sm hover:text-blue-400" href="/layoutCards">Cards</Link>
        <Link className="p-1 text-sm hover:text-blue-400" href="/layoutFlexFooter">FlexFooter</Link>
    </nav>
    <div className="flex-1">
        {children}
    </div>
  </div>
);

export default Layout;
