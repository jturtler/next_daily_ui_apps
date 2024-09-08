import Link from "next/link";
import Layout from "../components/Layout";
import { useState } from "react";
import ModalExplain from "../components/ModalExplain";
import DraggableDiv from "../components/Draggable";

// const LayoutCenter = () => ( <-></-> ) <-- Was this before

const IndexPage = () => 
{
  const [ showModal, setShowModal ] = useState<boolean>(false);
  const [ btnChoice, setBtnChoice ] = useState( '1' );

	//const explainPopUpClose = () => { setShowModal(false); };
  const onCloseExplain = () => { setShowModal(false); };

  const widthOption = ( btnChoice === '1' ) ? '': ' h-4/5 w-4/5 overflow-auto';
  const cssBtnCmn = 'm-2 px-2 py-0 rounded-lg text-sm';
  const cssBtnSelected = ' bg-blue-400';
  const cssBtnNotSelected = ' bg-blue-100 hover:bg-blue-300';

  // NOTE: WHY THIS DOES NOT WORK? -->  const getBtnCss = ( btnVal ) => ( cssBtnCmn + ( btnVal === btnChoice ) ? cssBtnSelected: cssBtnNotSelected )
  const getBtnCss = ( btnVal ) => ( btnVal === btnChoice ) ? cssBtnCmn + cssBtnSelected: cssBtnCmn + cssBtnNotSelected;
  //     <div className="absolute top-[240px] right-[100px] z-10 w-[100px] h-[50px] bg-gray-200 p-1 shadow-md grid">


  return (
  <Layout title="Layout Center | Next.js + TypeScript Example">

    <DraggableDiv initialX={window.innerWidth - 100} initialY={280}>
      <div className="w-[100px] h-[100px] bg-gray-200 p-1 shadow-md grid" >
        <button className={ getBtnCss( '1' ) } onClick={() => setBtnChoice('1')}>Basic</button>
        <button className={ getBtnCss( '2' ) } onClick={() => setBtnChoice('2')}>Covered</button>
        <button className={ cssBtnCmn + " bg-green-600 hover:bg-green-200" } onClick={() => setShowModal(true) } >Explain</button>      
      </div>
    </DraggableDiv>
  
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className={ "bg-white p-8 rounded-lg shadow-lg" + widthOption }>
        <h1 className="text-2xl font-bold">Hello, World!</h1>
        <p className="mt-4 text-gray-600">This is a simple centered layout.</p>
      </div>
    </div>

    <ModalExplain isVisible={showModal} onClose={ onCloseExplain }>
        <div>
          Use of 'flex', 'items-center/justify-center'. <br/>
          Default, 'Basic', is no prefix sizing, but increase as content grows. <br/>
          'Covered' has 'h-4/5, w-4/5, overflow-auto' for more filled area.  <br/>
        </div>
		</ModalExplain>

  </Layout>
  );
};

export default IndexPage;
