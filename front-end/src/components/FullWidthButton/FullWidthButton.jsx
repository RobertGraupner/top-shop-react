import styles from './FullWidthButton.module.css';

export function FullWidthButton({ children, onClick }) {
	return (
		<button onClick={onClick} className={styles.button}>
			{children}
		</button>
	);
}
