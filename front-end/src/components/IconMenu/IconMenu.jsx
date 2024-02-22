import { Link } from 'react-router-dom';

export function IconMenu() {
	return (
		<ul>
			<li>
				<Link to='/ulubione'></Link>
			</li>
			<li>
				<Link to='/koszyk'></Link>
			</li>
		</ul>
	);
}
