import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authService, { RegisterResponse } from '../../services/authService';
import { useMutation } from '@tanstack/react-query';
import Form from '../Form';
import useShowAlert from '../../utils/useShowAlert';
import axios from 'axios';

const Signup = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');

	const { mutate, reset } = useMutation({ mutationFn: authService.register });
	const showAlert = useShowAlert();

	const onRegisterSuccess = useCallback(
		(responseData: RegisterResponse) => {
			const { success, message } = responseData;
			if (success) {
				console.log(message);
				showAlert({
					show: true,
					type: 'primary',
					msg: message,
				});
				navigate('/login');
			} else {
				console.error('ERROR WHILE REGISTERING. PLEASE TRY AGAIN');
			}
		},
		[navigate, showAlert]
	);

	const onRegisterError = useCallback(
		(error: unknown) => {
			console.error(`Error while signing up. Please try again, ${error}`);
			const msg = axios.isAxiosError(error)
				? error.response?.data.message
				: 'Something went wrong, Please try later';
			showAlert({
				show: true,
				type: 'error',
				msg,
			});
		},
		[showAlert]
	);

	const handleRegister = useCallback(
		(username: string, password: string) => {
			console.log('username', username);
			console.log('password', password);

			mutate(
				{
					username,
					password: window.btoa(password),
				},
				{
					onSuccess: onRegisterSuccess,
					onError: onRegisterError,
					onSettled: () => reset(),
				}
			);
			// return username;
		},
		[mutate, onRegisterError, onRegisterSuccess, reset]
	);

	return (
		<>
			<Form>
				<form
					className="flex flex-col "
					onSubmit={(e) => {
						if (e) {
							e.preventDefault();
						}
						return;
					}}
				>
					<h1 className=" font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white mb-10 md:mb-16">
						S<span className="text-sky-500">i</span>gnUp
					</h1>
					<input
						type="email"
						placeholder="Email"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="px-2 mb-4 py-2 bg-transparent border-b-2 border-b-gray-200 text-gray-50 outline-none
        hover:border-b-gray-50 transition-colors
        "
					/>
					<input
						type="password"
						placeholder="Password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="px-2 mb-4 py-2 bg-transparent border-b-2 border-b-gray-200 text-gray-50 outline-none
        hover:border-b-gray-50 transition-colors white-eye"
					/>
					<input
						type="password"
						placeholder="Confirm Password"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						className="px-2 mb-4 py-2 bg-transparent border-b-2 border-b-gray-200 text-gray-50 outline-none
        hover:border-b-gray-50 transition-colors white-eye"
					/>

					<button
						className="mt-12 cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 font-bold focus:ring-offset-2 focus:ring-offset-slate-50 text-white h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400 "
						onClick={() => handleRegister(username, password)}
					>
						Sign Up
					</button>

					<p className="mt-6 text-sm  text-center max-w-3xl mx-auto text-slate-400">
						Already have an account?{' '}
						<span
							onClick={() => {
								navigate('/login');
							}}
							className="block underline cursor-pointer font-mono font-medium text-sky-500 "
						>
							Login
						</span>
					</p>
				</form>
			</Form>
		</>
	);
};

export default Signup;
