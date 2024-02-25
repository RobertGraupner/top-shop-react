import styles from './Accordion.module.css';
import ARROW from '../../assets/arrow.svg';
import { useState } from 'react';

export function Accordion({ items }) {
	const [activeItemIndex, setActiveItemIndex] = useState(0);

	return (
		<ul>
			{items.map((item, index) => (
				<li onClick={() => setActiveItemIndex(index)} key={item.title}>
					<div className={styles.item}>
						<p>{item.title}</p>
						<img
							className={activeItemIndex === index ? styles.expanded : ''}
							src={ARROW}
						/>
					</div>
					{activeItemIndex === index && <p>{item.content}</p>}
				</li>
			))}
		</ul>
	);
}
