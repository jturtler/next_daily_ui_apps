import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";
import ModalExplain from "../components/ModalExplain";

// const LayoutCenter = () => ( <-></-> ) <-- Was this before
export default function LayoutFlexFooter () {
  const [ showModal, setShowModal ] = useState<boolean>(false);
  const [ btnChoice, setBtnChoice ] = useState( '1' );

  const cssBtnCmn = 'm-2 px-2 py-0 rounded-lg text-sm';
  const cssBtnSelected = ' bg-blue-400';
  const cssBtnNotSelected = ' bg-blue-100 hover:bg-blue-300';

  const onCloseExplain = () => { setShowModal(false); };

  // NOTE: WHY THIS DOES NOT WORK? -->  const getBtnCss = ( btnVal ) => ( cssBtnCmn + ( btnVal === btnChoice ) ? cssBtnSelected: cssBtnNotSelected )
  const getBtnCss = ( btnVal ) => ( btnVal === btnChoice ) ? cssBtnCmn + cssBtnSelected: cssBtnCmn + cssBtnNotSelected;

  return (
  <Layout title="Layout Center | Next.js + TypeScript Example">

    <div className="absolute top-[240px] right-[100px] z-10 w-[100px] h-[50px] bg-gray-200 p-1 shadow-md grid">
      <button className={ cssBtnCmn + " bg-green-600 hover:bg-green-200" } onClick={() => setShowModal(true) } >Explain</button>
    </div>
    <div className="h-screen flex flex-col">
      <header className="bg-blue-600 text-white p-4">
        <h1 className="text-xl">Header</h1>
      </header>
    
      <main className="flex-1 p-6">
        <h2 className="text-2xl">Main Content</h2>
        <p className="mt-4">This is the main content area.</p>
      </main>
    
      <footer className="bg-gray-800 text-white p-4">
        <p>Footer Content</p>
      </footer>
    </div>

    <ModalExplain isVisible={showModal} onClose={ onCloseExplain }>
      <div>
        Use of 'flex', 'flex-col', 'flex-1' <br/>
        'flex-col' make flex container go in column direction, items to go in row direction.
        'flex-1' make it flexible size, thus, the middle part stretch in height
      </div>
		</ModalExplain>    

  </Layout>
  );
};
