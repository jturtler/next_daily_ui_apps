import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";
import ModalExplain from "../components/ModalExplain";
import DraggableDiv from "../components/Draggable";

const LayoutCards = () => 
{
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

    <DraggableDiv initialX={window.innerWidth - 100} initialY={280}>
      <div className="w-[100px] h-[100px] bg-gray-200 p-1 shadow-md" >
        <button className={ cssBtnCmn + " bg-green-600 hover:bg-green-200" } onClick={() => setShowModal(true) } >Explain</button>
      </div>
    </DraggableDiv>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 bg-gray-100">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Card 1</h3>
        <p className="mt-2 text-gray-600">Description of the card.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Card 2</h3>
        <p className="mt-2 text-gray-600">Description of the card.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Card 3</h3>
        <p className="mt-2 text-gray-600">Description of the card.</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h3 className="text-lg font-semibold">Card 4</h3>
        <p className="mt-2 text-gray-600">Description of the card.</p>
      </div>
    </div>

    <ModalExplain isVisible={showModal} onClose={ onCloseExplain }>
        <div>
          Use of 'grid', 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'. <br/>
        </div>
		</ModalExplain>

  </Layout>
  );
};

export default LayoutCards;
