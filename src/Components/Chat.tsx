import { Socket } from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useSocket = () => {
	const [receivedMessages, setReceivedMessages] = useState<string[]>([
		'hi there',
		'Hello',
		'This is the first message',
		'This is another message from second user',
	]);
	const [messageInput, setMessageInput] = useState<string>('');
	const [socket, setSocket] = useState<Socket | null>(null);

	const handleSubmit = (
		event: React.FormEvent<HTMLFormElement>,
		socket: Socket | null
	) => {
		event.preventDefault();
		if (messageInput && socket) {
			// Send the message to the server
			socket.emit('message', messageInput);

			// Clear the input field
			setMessageInput('');
		}
	};

	useEffect(() => {
		const newSocket: Socket = io('http://192.168.1.2:3000');

		// Connect to the Socket.IO server
		newSocket.on('connect', () => {
			console.log('Connected to Socket.IO server');
			setSocket(newSocket);
		});

		newSocket.on('message', (msg) => {
			console.log(`Received message: ${msg}`);
			setReceivedMessages((prevState) => [...prevState, msg]);
		});

		// Cleanup on component unmount
		return () => {
			newSocket.disconnect();
		};
	}, []);

	return {
		socket,
		receivedMessages,
		messageInput,
		setMessageInput,
		handleSubmit,
	};
};

const Chat = () => {
	const {
		socket,
		receivedMessages,
		messageInput,
		setMessageInput,
		handleSubmit,
	} = useSocket();

	return (
		<>
			<form
				id="form"
				action=""
				className="mt-10 min-h-full text-slate-50 mx-auto max-w-fit text-center"
				onSubmit={(e) => handleSubmit(e, socket)}
			>
				<div id="messages">
					<p className="text-2xl font-semibold shadow-md ">CHAT</p>
					<ul className="m-4 text-left">
						{receivedMessages.map((msg, index) => (
							<li key={index}>{msg}</li>
						))}
					</ul>
				</div>
				<div className="flex justify-around mx-4">
					<input
						id="input"
						autoComplete="off"
						className="px-2 py-1 text-slate-200 outline-none bg-slate-950 border border-slate-200 rounded-md"
						value={messageInput}
						onChange={(e) => setMessageInput(e.target.value)}
					/>
					<button className="px-2 py-1 border text-md rounded-md cursor-pointer transition-colors text-gray-950 bg-slate-200 max-w-32">
						Send
					</button>
				</div>
			</form>
		</>
	);
};

export default Chat;
