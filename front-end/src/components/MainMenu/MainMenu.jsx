import styles from './MainMenu.module.css';
import { NavLink } from 'react-router-dom';
import { GENDERS } from '../../constants/categories';

export function MainMenu() {
	return (
		<ul className={styles.mainMenu}>
			{GENDERS.map((el) => {
				return (
					<li key={el.path}>
						<NavLink to={`/${el.path}`}>{el.categoryName}</NavLink>
					</li>
				);
			})}
		</ul>
	);
}
