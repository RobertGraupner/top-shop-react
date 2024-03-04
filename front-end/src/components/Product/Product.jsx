import styles from './Product.module.css';
import { Link, useFetcher } from 'react-router-dom';
import { Price } from '../Price/Price';

const ENDPOINT_TO_PATH_MAPPING = {
	men: 'mezczyzna',
	women: 'kobieta',
	children: 'dziecko',
};

export function Product({ product }) {
	// useFetcher to hook, który zwraca obiekt z dwoma funkcjami: Form i fetch. Działa jak zwykły Form
	// z tym, że po submicie nie przekierowuje na stronę, która jest zdefiniowana w action
	const { Form } = useFetcher();

	return (
		<Link
			to={`/${ENDPOINT_TO_PATH_MAPPING[product.gender]}/${product.category}/${
				product.subcategory
			}/${product.id}`}
			className={styles.product}>
			<img src={product.photos[0]} alt='' />
			<h3>{product.productName}</h3>
			<p>
				<Price product={product} />
			</p>
			<div className={styles.hearth}></div>
			<Form
				onClick={(e) => e.stopPropagation()}
				action={`/add-to-favourites/${product.id}`}
				method='POST'>
				<button>
					<div className={styles.hearth}></div>
				</button>
			</Form>
		</Link>
	);
}
