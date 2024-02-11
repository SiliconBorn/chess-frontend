import { useRecoilValue } from 'recoil';
import { authSelector } from './recoil/selectors/authSelector';
import Router from './Routes/index';
import './App.css';

function App() {
	const authToken = useRecoilValue(authSelector);
	const isLoggedIn = authToken ? true : false;

	return <Router isLoggedIn={isLoggedIn} />;
}

export default App;
