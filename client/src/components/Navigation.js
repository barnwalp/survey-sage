import { GrUndo } from 'react-icons/gr';
import { GrRedo } from 'react-icons/gr';
import { RiDeleteBin6Line } from 'react-icons/ri';
import logo from '../assets/logo.png';


const Navigation = () => {
	return (
		<nav className="flex flex-col items-center">
			<img 
				className="w-64 p-4"
				src={logo}
				alt="logo"
			/>
			<section className="flex gap-4 text-xl items-center">
				<h3 className="">Untitled Form</h3>
				<button><GrUndo /></button>
				<button><GrRedo /></button>
				<button><RiDeleteBin6Line /></button>
				<button className="bg-primary py-1 px-6 rounded-lg text-white text-sm font-semibold">Send</button>
			</section>
		</nav>
	)
}

export default Navigation;
