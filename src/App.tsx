import Router from "./Routes/index"
import './App.css';

function App() {
	return (
		<div className="app min-h-full">
		
		<Router isLoggedIn={false}/>
		</div>
	);
}

export default App;
