
import Modal from "./Modal";

export default function ModalExplain( { isVisible, onClose, children }: { isVisible: boolean, onClose: () => void, children: React.ReactNode } ) {

	return (
		<Modal isVisible={isVisible} onClose={onClose}>
			<div className="bg-blue-50 h-3/5 w-3/5 shadow-lg p-3 text-sm">
				<div title="Close" onClick={onClose } className="inline-block font-bold text-blue-700 bg-blue-300 px-1 cursor-pointer">X</div>
				{children}
			</div>
		</Modal>
	);
};