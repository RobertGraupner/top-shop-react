import { NavLink } from 'react-router-dom';
import ARROW from '../../assets/arrow.svg';
import styles from './Breadcrumbs.module.css';

export function Breadcrumbs() {
	const breadcrumbs = [
		{
			categoryName: 'Kobieta',
			path: 'kobieta',
		},
		{
			categoryName: 'Odzież',
			path: 'odziez',
		},
		{
			categoryName: 'Swetry',
			path: 'swetry',
		},
	];

	return (
		<ul className={styles.breadcrumbs}>
			{breadcrumbs.map((breadcrumb) => {
				return (
					<li key={breadcrumb.path}>
						<NavLink to={breadcrumb.path}>{breadcrumb.categoryName}</NavLink>
						<img src={ARROW} />
					</li>
				);
			})}
		</ul>
	);
}
