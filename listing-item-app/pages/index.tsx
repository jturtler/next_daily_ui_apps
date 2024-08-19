import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="bg-gray-200">Hello Next.js 👋</h1>
    <div className="bg-gray-400 text-blue-200">
      This is a group testing..
    </div>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
);

export default IndexPage;
