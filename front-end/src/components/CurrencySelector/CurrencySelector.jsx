import styles from './CurrencySelector.module.css';
import { CURRENCIES } from '../../constants/currencies';
import { useContext } from 'react';
import { CurrencyContext } from '../../contexts/CurrencyContext';

export function CurrencySelector() {
	const [currency, setCurrency] = useContext(CurrencyContext);

	return (
		<select
			value={currency}
			onChange={(e) => {
				setCurrency(e.currentTarget.value);
				localStorage['selected_currency'] = e.currentTarget.value;
			}}
			className={styles.currencySelector}>
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
