import './styles/theme.css';
import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from './views/MainPage/MainPage.jsx';
import { Cart } from './views/Cart/Cart.jsx';
import { Favourites } from './views/Favourites/Favourites.jsx';
import { Layout } from './components/Layout/Layout.jsx';
import { mainPageLoader } from './api/mainPageLoader.js';

const router = createBrowserRouter([
	{
		path: '',
		element: <Layout />,
		children: [
			{
				path: '/koszyk',
				element: <Cart />,
			},
			{
				path: '/ulubione',
				element: <Favourites />,
			},
			{
				// ? oznacza, że parametr jest opcjonalny. Wartość parametru jest przekazywana do komponentu MainPage. Dzięki temu, że jest opcjonalny, to dla pierwszego path:'' też zostanie wyrenderowany komponent MainPage z /kobieta, bo tak mamy ustawiony redirect.
				path: '/:gender?',
				element: <MainPage />,
				// Loader to funkcja, która zwraca dane, które są przekazywane do komponentu MainPage. Funkcja jest w osobnym pliku.
				loader: mainPageLoader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
