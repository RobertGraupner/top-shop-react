import styles from './CurrencySelector.module.css';
import { CURRENCIES } from '../../constants/currencies';

export function CurrencySelector() {
	return (
		<select className={styles.currencySelector}>
			{Object.values(CURRENCIES).map((curr) => {
				return (
					<option key={curr} value={curr}>
						{curr}
					</option>
				);
			})}
		</select>
	);
}
