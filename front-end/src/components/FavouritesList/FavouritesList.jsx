import styles from './FavouritesList.module.css';
import { FavouriteProduct } from '../FavouriteProduct/FavouriteProduct';
import { CenteredContent } from '../CenteredContent/CenteredContent';

export function FavouritesList({ favourites }) {
	return (
		<CenteredContent>
			<div className={styles.favouritesList}>
				<h2>Ulubione</h2>
				<div>
					{favourites.map((favourite) => (
						<FavouriteProduct key={favourite.id} favourite={favourite} />
					))}
				</div>
			</div>
		</CenteredContent>
	);
}
