import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav className="bg-black py-2 text-gray-200">
        <Link className="px-3 hover:text-blue-400" href="/">Home</Link> | 
        <Link className="px-3 hover:text-blue-400" href="/about">About</Link> |{" "}
        <Link className="px-3 hover:text-blue-400" href="/users">Users List</Link> |{" "}
        <Link className="px-3 hover:text-blue-400" href="/layoutCenter">Center</Link> |{" "}
        <a className="px-3 hover:text-blue-400" href="/api/users">Users API</a>
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout;
