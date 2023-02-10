import { GrUndo } from 'react-icons/gr';
import { GrRedo } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BsPlusCircle } from 'react-icons/bs';
import { MdTitle } from 'react-icons/md';
import { RxImage } from 'react-icons/rx';
import { BsEye } from 'react-icons/bs';
import { AiOutlineEdit } from 'react-icons/ai';
import logo from '../assets/logo.png';
import PreviewContext from './../context/previewContext';
import { useContext } from 'react';


const Navigation = ({ title, handleTitle }) => {
	const btnPreview = useContext(PreviewContext);
	console.log(btnPreview.preview);

	return (
		<nav className="flex flex-col items-center">
			<img 
				className="w-64 p-4"
				src={logo}
				alt="logo"
			/>
			<section className="flex gap-4 text-lg items-center">
				<input 
					className="text-2xl w-40 outline-0 focus:border-b-lightBlue focus:border-b"
					type="text"
					value={title}
					onChange={handleTitle}
				/>
				<button className="p-1 text-2xl hover:rounded-2xl hover:bg-lightBlue"><GrUndo /></button>
				<button className="p-1 text-2xl hover:rounded-2xl hover:bg-lightBlue"><GrRedo /></button>
				<button className="p-1 text-2xl hover:rounded-2xl hover:bg-lightBlue"><RiDeleteBin6Line /></button>
				<button className="p-1 text-2xl hover:rounded-2xl hover:bg-lightBlue"><BsPlusCircle /></button>
				<button className="p-1 text-2xl hover:rounded-2xl hover:bg-lightBlue"><MdTitle /></button>
				<button className="p-1 text-2xl hover:rounded-2xl hover:bg-lightBlue"><RxImage /></button>
				<button 
					className="p-1 text-2xl hover:rounded-2xl hover:bg-lightBlue"
					onClick={btnPreview.togglePreview}
				>
					{btnPreview.preview ? <BsEye /> : <AiOutlineEdit />}
				</button>
				<button className="bg-primary py-1 px-6 rounded-lg text-white text-sm font-semibold">Send</button>
			</section>
		</nav>
	)
}

export default Navigation;
