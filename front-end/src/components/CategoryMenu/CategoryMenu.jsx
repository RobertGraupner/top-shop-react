import styles from './CategoryMenu.module.css';
import { CATEGORIES } from '../../constants/categories';
import { NavLink, useParams } from 'react-router-dom';

export function CategoryMenu() {
	// useParams to hook z react-router-dom, który pozwala na pobranie parametrów z URL.
	const params = useParams();

	return (
		<div className={styles.categoryMenu}>
			<ul>
				{CATEGORIES.map((category) => (
					<li key={category.path}>
						<NavLink to={`/${params.gender}/${category.path}`}>
							{category.categoryName}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
}
