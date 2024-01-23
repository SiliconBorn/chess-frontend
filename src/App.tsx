import Chat from './Components/Chat';
import Game from './Game';
// import Landing from './Components/Landing';
// import JoinRoom from './Components/JoinRoom';
// import './AppVanilla.css';
import './App.css';

function App() {
	return (
		<div className=" overflow-auto font-sans bg-slate-950 min-h-screen  px-15">
			<div className="pt-4 px-10 mx-auto block text-center">
				<h1 className=" text-gray-50 text-6xl font-bold uppercase my-5 drop-shadow-lg">
					Chess
				</h1>
				<p className=" text-gray-50 text-lg">
					Play with your friends online 🐴
				</p>
			</div>
			<div className=" max-w-72 mx-auto mt-10 shadow-md shadow-slate-600">
				<Game />
			</div>
			<Chat />
		</div>
	);
}

export default App;
