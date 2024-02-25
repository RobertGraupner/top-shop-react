import styles from './Photos.module.css';
import { FlexContainer } from '../FlexContainer/FlexContainer';
import { useState } from 'react';

export function Photos({ product }) {
	const [currentPhoto, setCurrentPhoto] = useState(product.photos[0]);

	return (
		<FlexContainer>
			<div className={styles.thumbnails}>
				{product.photos.map((photo, index) => (
					<img
						className={currentPhoto === photo ? styles.active : ''}
						onClick={() => setCurrentPhoto(photo)}
						key={index}
						src={photo}
					/>
				))}
			</div>
			<img className={styles.mainPhoto} src={currentPhoto} />
		</FlexContainer>
	);
}
