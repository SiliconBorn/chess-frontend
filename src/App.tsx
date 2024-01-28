import Router from './Routes/index';
import './App.css';
import { useRecoilValue } from 'recoil';
import { authSelector } from './recoil/selectors/authSelector';

function App() {
	const authToken = useRecoilValue(authSelector);
	const isLoggedIn = authToken ? true : false;
	return (
		<div className="app min-h-full">
			<Router isLoggedIn={isLoggedIn} />
		</div>
	);
}

export default App;
