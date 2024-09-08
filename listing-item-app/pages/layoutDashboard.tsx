import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";
import ModalExplain from "../components/ModalExplain";
import DraggableDiv from "../components/Draggable";

// const LayoutCenter = () => ( <-></-> ) <-- Was this before
export default function LayoutDashboard () {
  const [ showModal, setShowModal ] = useState<boolean>(false);
  const [ btnChoice, setBtnChoice ] = useState( '1' );

  const onCloseExplain = () => { setShowModal(false); };

  const cssBtnCmn = 'm-2 px-2 py-0 rounded-lg text-sm';
  const cssBtnSelected = ' bg-blue-400';
  const cssBtnNotSelected = ' bg-blue-100 hover:bg-blue-300';

  // NOTE: WHY THIS DOES NOT WORK? -->  const getBtnCss = ( btnVal ) => ( cssBtnCmn + ( btnVal === btnChoice ) ? cssBtnSelected: cssBtnNotSelected )
  const getBtnCss = ( btnVal ) => ( btnVal === btnChoice ) ? cssBtnCmn + cssBtnSelected: cssBtnCmn + cssBtnNotSelected;

  return (
  <Layout title="Layout Center | Next.js + TypeScript Example">

  <DraggableDiv initialX={window.innerWidth - 100} initialY={280}>
    <div className="w-[100px] h-[100px] bg-gray-200 p-1 shadow-md" >
      <button className={ cssBtnCmn + " bg-green-600 hover:bg-green-200" } onClick={() => setShowModal(true) } >Explain</button>
    </div>
  </DraggableDiv>

    <div className="flex h-screen">
      <div className="w-24 bg-gray-800 text-white p-4">
        <h2 className="text-lg font-semibold">Sidebar</h2>
        <ul className="mt-4">
          <li className="py-2"><a href="#" className="hover:underline">Link 1</a></li>
          <li className="py-2"><a href="#" className="hover:underline">Link 2</a></li>
          <li className="py-2"><a href="#" className="hover:underline">Link 3</a></li>
        </ul>
      </div>
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-2xl font-bold">Main Content</h1>
        <p className="mt-4">This is the main content area.</p>
      </div>
    </div>

    <ModalExplain isVisible={showModal} onClose={ onCloseExplain }>
        <div>
          Use of 'flex', 'flex-1'. <br/>
        </div>
		</ModalExplain>    

  </Layout>
  );
};
