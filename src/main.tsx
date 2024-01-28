import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { QueryClientProvider } from '@tanstack/react-query';
import { getQueryClient } from './react-query/queryClient.tsx';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<QueryClientProvider client={getQueryClient()}>
		<React.StrictMode>
			<BrowserRouter>
				<RecoilRoot>
					<App />
				</RecoilRoot>
			</BrowserRouter>
		</React.StrictMode>
	</QueryClientProvider>
);
