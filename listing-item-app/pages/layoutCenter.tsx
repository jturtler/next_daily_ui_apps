import Link from "next/link";
import Layout from "../components/Layout";

const LayoutCenter = () => (
  <Layout title="Layout Center | Next.js + TypeScript Example">

    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
      <img src="/images/beams.jpg" alt="" className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
      <div className="absolute inset-0 bg-[url(/images/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative h-5/6 w-5/6 bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
        <div className="mx-auto max-w-md">
          <img src="/images/logo.svg" className="h-6" alt="Tailwind Play" />
          <div className="divide-y divide-gray-300/50">
            <div className="pt-8 text-base font-semibold leading-7">
              <p className="text-gray-900">Want to dig deeper into Tailwind?</p>
              <p>
                <a href="https://tailwindcss.com/docs" className="text-sky-500 hover:text-sky-600">Read the docs &rarr;</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Layout>
);

export default LayoutCenter;
