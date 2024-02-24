import styles from './Product.module.css';
import { Link } from 'react-router-dom';

export function Product({ product }) {
	return (
		<Link className={styles.product}>
			<img src={product.photos[0]} alt='' />
			<h3>{product.productName}</h3>
			<p>{product.pricePLN} zł</p>
			<div className={styles.hearth}></div>
		</Link>
	);
}
