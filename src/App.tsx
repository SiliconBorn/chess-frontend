import Router from './Routes/index';
import './App.css';
import { useRecoilValue } from 'recoil';
import { authSelector } from './recoil/selectors/authSelector';

function App() {
	const authToken = useRecoilValue(authSelector);
	const isLoggedIn = authToken ? true : false;
	return (
		<div className="	bg-gradient-to-b from-slate-950 to-slate-800  h-screen overflow-clip p-4 sm:p-6 sm:px-8 ">
			<div className="relative pt-2 sm:pt-4 flex justify-items-start items-baseline font-bold tracking-tight text-lg leading-6">
				<img src="./chess.png" width={40} />
				<span className="text-slate-50 text-3xl pl-2">che</span>
				<span className="text-sky-500 text-3xl">ss</span>
			</div>
			<Router isLoggedIn={isLoggedIn} />
		</div>
		// <div className="app min-h-full">
		// </div>
	);
}

export default App;
