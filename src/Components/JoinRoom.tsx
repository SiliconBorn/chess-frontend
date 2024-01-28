import { useState } from 'react';

interface FormProps {
	onSetForm: (form: string) => void;
}

export default function JoinRoom() {
	const [form, setForm] = useState('join');

	function handleSetForm(formValue: string) {
		if (formValue === 'join' || formValue === 'create') setForm(formValue);
	}
	return (
		<div className="overflow-auto font-sans bg-slate-950 min-h-screen  p-15  flex flex-col items-center justify-center">
			<img src="./src/assets/Chess_Join_Room.svg" className="max-w-72" />
			{form === 'join' && <JoinRoomForm onSetForm={handleSetForm} />}
			{form === 'create' && <CreateRoomForm onSetForm={handleSetForm} />}
		</div>
	);
}

function CreateRoomForm({ onSetForm }: FormProps) {
	return (
		<form action="" className="flex flex-col max-w-56 mt-8">
			<input
				type="text"
				placeholder="Enter room ID"
				className="mb-4 py-2 bg-slate-950 border-b-2 border-b-gray-200 text-gray-50 outline-none
					hover:border-b-gray-50 transition-colors text-center"
			/>
			<button className="blocktext-slate-900 p-2 mt-2 text-md rounded-sm cursor-pointer bg-slate-100 hover:bg-white transition-colors ">
				Create a new room
			</button>
			<p className="text-gray-200 text-center m-2 text-sm">OR</p>
			<button
				onClick={() => onSetForm('create')}
				className="blocktext-slate-900 hover:border-slate-50 p-2 border border-slate-300 text-md rounded-sm cursor-pointer transition-colors text-gray-300 hover:text-gray-50"
			>
				Join Room
			</button>
		</form>
	);
}

function JoinRoomForm({ onSetForm }: FormProps) {
	return (
		<form action="" className="flex flex-col max-w-56 mt-8">
			<input
				type="text"
				placeholder="Enter room ID"
				className="mb-4 py-2 bg-slate-950 border-b-2 border-b-gray-200 text-gray-50 outline-none
					hover:border-b-gray-50 transition-colors text-center"
			/>
			<button className="blocktext-slate-900 p-2 mt-2 text-md rounded-sm cursor-pointer bg-slate-100 hover:bg-white transition-colors ">
				Join Room
			</button>
			<p className="text-gray-200 text-center m-2 text-sm">OR</p>
			<button
				onClick={() => onSetForm('create')}
				className="blocktext-slate-900 hover:border-slate-50 p-2 border border-slate-300 text-md rounded-sm cursor-pointer transition-colors text-gray-300 hover:text-gray-50"
			>
				Create Room
			</button>
		</form>
	);
}
