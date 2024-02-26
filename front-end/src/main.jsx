import './styles/theme.css';
import './styles/globals.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { ProductDetails } from './views/ProductDetails/ProductDetails.jsx';
import { Cart } from './views/Cart/Cart.jsx';
import { Favourites } from './views/Favourites/Favourites.jsx';
import { Layout } from './components/Layout/Layout.jsx';

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
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
