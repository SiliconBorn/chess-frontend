import { useNavigate } from 'react-router-dom';

export default function Landing() {
	const navigate = useNavigate();

	return (
		<div className="bg-gradient-to-b from-slate-950 to-slate-800  min-h-screen  p-4 sm:p-6 sm:px-8 ">
			<div className="relative pt-2 sm:pt-4 flex justify-items-start items-baseline font-bold tracking-tight text-lg leading-6">
				<img src="./chess.png" width={40} />
				<span className="text-slate-50 text-3xl pl-2">che</span>
				<span className="text-sky-500 text-3xl">ss</span>
			</div>
			<div className="relative max-w-5xl mx-auto pt-16 sm:pt-24 lg:pt-32 flex flex-col items-center ">
				<h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-white mt-10">
					Play Chess online with your buddies.
				</h1>
				<p className="mt-6 text-lg text-slate-600 text-center max-w-3xl mx-auto dark:text-slate-400">
					Build with the power of{' '}
					<code className="font-mono font-medium text-sky-500 dark:text-sky-400">
						React
					</code>{' '}
					and{' '}
					<code className="font-mono font-medium text-sky-500 dark:text-sky-400">
						Scoket.io
					</code>
				</p>
				<div className="mt-6 sm:mt-10 flex justify-center space-x-6 text-sm sm:text-md ">
					<a
						onClick={() => navigate('/login')}
						className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-400 font-bold focus:ring-offset-2 focus:ring-offset-slate-50 text-white h-12 px-6 rounded-lg w-full flex items-center justify-center sm:w-auto bg-sky-500 highlight-white/20 hover:bg-sky-400"
					>
						Login
					</a>

					<button
						onClick={() => navigate('/signup')}
						className="sm:flex items-center justify-center sm:w-28  px-4 h-12 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm rounded-lg  bg-slate-800 ring-0 text-slate-300 highlight-white/5 hover:bg-slate-700 tracking-wide font-semibold"
					>
						Register
					</button>
				</div>
			</div>
		</div>
	);
}
