import { useState } from 'react';
import Form from './Form';
import { useNavigate } from 'react-router-dom';

interface FormProps {
	onSetForm: (form: string) => void;
}

export default function JoinRoom() {
	const [form, setForm] = useState('join');
	function handleSetForm(formValue: string) {
		if (formValue === 'join' || formValue === 'create') setForm(formValue);
	}
	return (
		<Form>
			<h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white mb-8 md:mb-12">
				R<span className="text-sky-500">oo</span>m
			</h1>
			<div className=" flex flex-col items-center">
				<img
					src="/Chess_Join_Room.svg"
					className="max-w-72"
					width={150}
				/>
				{form === 'join' && <JoinRoomForm onSetForm={handleSetForm} />}
				{form === 'create' && (
					<CreateRoomForm onSetForm={handleSetForm} />
				)}
			</div>
		</Form>
	);
}

function CreateRoomForm({ onSetForm }: FormProps) {
	const navigate = useNavigate();

	return (
		<form action="" className="flex flex-col max-w-56 mt-8">
			<input
				type="text"
				placeholder="Enter room ID"
				className="px-2 mb-4 py-2 bg-transparent border-b-2 border-b-gray-200 text-gray-50 outline-none
				hover:border-b-gray-50 transition-colors white-eye text-center"
			/>
			<button
				onClick={() => navigate('/user/game')}
				className="mt-4 cursor-pointer  focus:outline-none focus:ring-2 focus:ring-slate-400 font-semibold focus:ring-offset-2 focus:ring-offset-slate-50 text-white h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400"
			>
				Create a new room
			</button>
			<p className=" my-2 text-center max-w-3xl mx-auto   cursor-pointer font-mono font-medium  text-sky-400">
				OR
			</p>
			<button
				onClick={() => onSetForm('create')}
				className="sm:flex items-center justify-center  px-4 h-12 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 shadow-sm rounded-lg  bg-slate-800 ring-0 text-slate-300 highlight-white/5 hover:bg-slate-700 tracking-wide font-semibold"
			>
				Join Room
			</button>
		</form>
	);
}

function JoinRoomForm({ onSetForm }: FormProps) {
	const navigate = useNavigate();

	return (
		<form action="" className="flex flex-col max-w-56 mt-8">
			<input
				type="text"
				placeholder="Enter room ID"
				className="px-2 mb-4 py-2 bg-transparent border-b-2 border-b-gray-200 text-gray-50 outline-none
				hover:border-b-gray-50 transition-colors white-eye text-center"
			/>
			<button
				onClick={() => navigate('/user/game')}
				className="mt-4 cursor-pointer  focus:outline-none focus:ring-2 focus:ring-slate-400 font-semibold focus:ring-offset-2 focus:ring-offset-slate-50 text-white h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400"
			>
				Join Room
			</button>
			<p className=" my-2 text-center max-w-3xl mx-auto   cursor-pointer font-mono font-medium  text-sky-400">
				OR
			</p>
			<button
				onClick={() => onSetForm('create')}
				className="sm:flex items-center justify-center  px-4 h-12 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-600 shadow-sm rounded-lg  bg-slate-800 ring-0 text-slate-300 highlight-white/5 hover:bg-slate-700 tracking-wide font-semibold"
			>
				Create Room
			</button>
		</form>
	);
}
