import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import Login from '../Components/Login-Register/Login';
import Signup from '../Components/Login-Register/Signup';
import Game from '../Components/Game';
import Landing from '../Components/Landing';
import JoinRoom from '../Components/JoinRoom';

const Router = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	return useRoutes([
		{
			path: '/',
			element: <Outlet />,
			children: [
				{ path: '', element: <Navigate to="/landing" replace /> },
				{ path: 'landing', element: <Landing /> },
				{ path: 'login', element: <Login /> },
				{ path: 'signup', element: <Signup /> },
				{ path: 'join', element: <JoinRoom /> },
			],
		},
		{
			path: '/user',
			element: isLoggedIn ? <JoinRoom /> : <Navigate to="/login" />,

			children: [
				{ path: '', element: <Navigate to="/Game" /> },
				{
					path: 'Game',
					element: <Outlet />,
					children: [{ path: '', element: <Game /> }],
				},
			],
		},
	]);
};

export default Router;
