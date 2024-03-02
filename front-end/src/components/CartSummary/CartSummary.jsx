import styles from './CartSummary.module.css';
import { FullWidthButton } from '../FullWidthButton/FullWidthButton';
import CAR_ICON from '../../assets/car.svg';
import { useContext } from 'react';
import { CurrencyContext } from '../../contexts/CurrencyContext';
import { CURRENCIES, CURRENCY_SIGN } from '../../constants/currencies';

export function CartSummary({ products }) {
	const [currency] = useContext(CurrencyContext);

	const deliverySums = {
		[CURRENCIES.PLN]: 49,
		[CURRENCIES.USD]: 10,
	};

	const minSumForFreeDelivery = {
		[CURRENCIES.PLN]: 500,
		[CURRENCIES.USD]: 100,
	};

	const currencySigns = CURRENCY_SIGN[currency];

	const deliveryCost = deliverySums[currency];
	const minSumDelivery = minSumForFreeDelivery[currency];

	let sum = 0;
	products.forEach((product) => {
		sum += currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD;
	});

	const totalCost = sum > minSumDelivery ? sum : sum + deliveryCost;

	return (
		<div className={styles.cartSummary}>
			<h2>Podsumowanie</h2>
			<div className={styles.cartRow}>
				<p>Wartość produktów:</p>
				<p>
					{sum} {currencySigns}
				</p>
			</div>
			<div className={styles.cartRow}>
				<p>Koszt dostawy:</p>
				<p>
					{sum > minSumDelivery ? 0 : deliveryCost}
					{currencySigns}
				</p>
			</div>
			<div className={`${styles.cartRow} ${styles.summaryRow}`}>
				<p>Do zapłaty:</p>
				<p>
					{totalCost} {currencySigns}
				</p>
			</div>
			<FullWidthButton isBlack={true}>Do kasy</FullWidthButton>
			<div className={styles.deliveryInfo}>
				<img src={CAR_ICON} alt='Samochód' />
				<p>
					Darmowa dostawa od {minSumDelivery} {currencySigns}
				</p>
			</div>
		</div>
	);
}
