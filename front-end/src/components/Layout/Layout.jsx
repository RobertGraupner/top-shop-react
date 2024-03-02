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
import { CartContext } from '../../contexts/CartContext';
import { useLocalStorage } from '../../hooks/useLocalStorage';

// Uywamy Outlet zamiast propsa children, ponieważ React Router DOM używa tego komponentu do renderowania komponentów w zależności od ścieżki URL.
export function Layout() {
	const [currency, setCurrency] = useLocalStorage(
		'selected_currency',
		CURRENCIES.PLN
	);

	// uzyway localStorage, aby przechowywac wybrane produkty w koszyku. Mozna było zapisać na serwerze
	// jesli do useState przekazujemy funkcje, to zostanie ona wywołana tylko raz
	const [cartItems, setCartItems] = useLocalStorage('cart_products', []);

	function addProductToCart(product) {
		const newState = [...cartItems, product];
		setCartItems(newState);
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
