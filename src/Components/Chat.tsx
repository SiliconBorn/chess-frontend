import { Socket } from 'socket.io-client';
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';

const useSocket = () => {
	const [receivedMessages, setReceivedMessages] = useState<string[]>([
		'hi there',
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
				className="chat-form"
				onSubmit={(e) => handleSubmit(e, socket)}
			>
				<div id="messages">
					<p>Received Messages:</p>
					<ul>
						{receivedMessages.map((msg, index) => (
							<li key={index}>{msg}</li>
						))}
					</ul>
				</div>
				<div className="chat-box">
					<input
						id="input"
						autoComplete="off"
						className="chat-input"
						value={messageInput}
						onChange={(e) => setMessageInput(e.target.value)}
					/>
					<button className="chat-button">Send</button>
				</div>
			</form>
		</>
	);
};

export default Chat;
