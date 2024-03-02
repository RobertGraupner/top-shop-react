import { Outlet } from 'react-router-dom';
import { CategoryMenu } from '../CategoryMenu/CategoryMenu';
import { CurrencySelector } from '../CurrencySelector/CurrencySelector';
import { Footer } from '../Footer/Footer';
import { IconMenu } from '../IconMenu/IconMenu';
import { Logo } from '../Logo/Logo';
import { MainContent } from '../MainContent/MainContent';
import { MainMenu } from '../MainMenu/MainMenu';
import { TopBar } from '../TopBar/TopBar';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { CURRENCIES } from '../../constants/currencies';
import { useState } from 'react';
import { CartContext } from '../../contexts/CartContext';

// Uywamy Outlet zamiast propsa children, ponieważ React Router DOM używa tego komponentu do renderowania komponentów w zależności od ścieżki URL.
export function Layout() {
	const [currency, setCurrency] = useState(
		localStorage['selected_currency'] || CURRENCIES.PLN
	);
	// uzyway localStorage, aby przechowywac wybrane produkty w koszyku. Mozna było zapisać na serwerze
	// jesli do useState przekazujemy funkcje, to zostanie ona wywołana tylko raz, podczas pierwszego renderowania komponentu. Jest to przydatne, gdy chcemy uniknąć wywoływania funkcji za każdym razem, gdy komponent jest renderowany. Nazywa sie to funkcja inicjalizująca
	const [cartItems, setCartItems] = useState(() => {
		return localStorage['cart_products']
			? JSON.parse(localStorage['cart_products'])
			: [];
	});

	function addProductToCart(product) {
		setCartItems((previousCartItems) => {
			const newState = [...previousCartItems, product];
			localStorage['cart_products'] = JSON.stringify(newState);
			return newState;
		});
	}

	return (
		<>
			<CartContext.Provider value={[cartItems, addProductToCart]}>
				<CurrencyContext.Provider value={[currency, setCurrency]}>
					<MainContent>
						<TopBar>
							<MainMenu />
							<Logo />
							<div>
								<CurrencySelector />
								<IconMenu />
							</div>
						</TopBar>
						<CategoryMenu />
						<Outlet />
					</MainContent>
					<Footer />
				</CurrencyContext.Provider>
			</CartContext.Provider>
		</>
	);
}
