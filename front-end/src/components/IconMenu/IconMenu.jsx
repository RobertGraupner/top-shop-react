import BAG_ICON from '../../assets/bag.svg';
import HEART_ICON from '../../assets/heart.svg';
import styles from './IconMenu.module.css';
import { Link } from 'react-router-dom';

export function IconMenu() {
	const cartItem = 2;

	return (
		<ul className={styles.iconMenu}>
			<li>
				<Link to='/ulubione'>
					<img src={HEART_ICON} alt='Ulubione' />
				</Link>
			</li>
			<li>
				<Link to='/koszyk'>
					<img src={BAG_ICON} alt='Koszyk' />
					<div className={styles.numberOfProducts}>{cartItem}</div>
				</Link>
			</li>
		</ul>
	);
}
