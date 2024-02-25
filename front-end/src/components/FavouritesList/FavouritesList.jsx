import styles from './FavouritesList.module.css';
import { FavouriteProduct } from '../FavouriteProduct/FavouriteProduct';
import { CenteredContent } from '../CenteredContent/CenteredContent';

export function FavouritesList({ products }) {
	return (
		<CenteredContent>
			<div className={styles.favouritesList}>
				<h2>Ulubione</h2>
				<div>
					{products.map((product) => (
						<FavouriteProduct key={product.id} product={product} />
					))}
				</div>
			</div>
		</CenteredContent>
	);
}
