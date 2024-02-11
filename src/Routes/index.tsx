import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import Login from '../Components/Login-Register/Login';
import Signup from '../Components/Login-Register/Signup';
import Game from '../Components/Game';
import Landing from '../Components/Landing';
import JoinRoom from '../Components/Room';
import Main from '../Components/Main';
import PageNotFound from '../Components/PageNotFound';

const Router = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
	return useRoutes([
		{
			path: '/',
			element: (
				<Main>
					<Outlet />
				</Main>
			),
			children: [
				{ path: '', element: <Landing /> },
				{ path: 'login', element: <Login /> },
				{ path: 'signup', element: <Signup /> },
				{
					path: 'user',
					element: isLoggedIn ? <Outlet /> : <Navigate to="/login" />,
					children: [
						{
							path: 'room',
							element: <JoinRoom />,
						},
						{
							path: 'Game',
							element: <Game />,
						},
					],
				},
				// below are testing routes, without auth
				{ path: 'room', element: <JoinRoom /> },
				{ path: 'game', element: <Game /> },

				{
					path: '*',
					element: <PageNotFound />,
				},
			],
		},
	]);
};

export default Router;
