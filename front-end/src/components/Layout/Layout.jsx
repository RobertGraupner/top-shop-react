import { Outlet } from 'react-router-dom';
import { CategoryMenu } from '../CategoryMenu/CategoryMenu';
import { CurrencySelector } from '../CurrencySelector/CurrencySelector';
import { Footer } from '../Footer/Footer';
import { IconMenu } from '../IconMenu/IconMenu';
import { Logo } from '../Logo/Logo';
import { MainContent } from '../MainContent/MainContent';
import { MainMenu } from '../MainMenu/MainMenu';
import { TopBar } from '../TopBar/TopBar';

// Uywamy Outlet zamiast propsa children, ponieważ React Router DOM używa tego komponentu do renderowania komponentów w zależności od ścieżki URL.
export function Layout() {
	return (
		<>
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
		</>
	);
}
