import { redirect } from 'react-router-dom';
import { PATH_TO_ENDPOINT_MAPPING, BACK_END_URL } from '../constants/api';

// params w loaderze to obiekt, który zawiera wartości parametrów z URL.
export function mainPageLoader({ params }) {
	const backEndPath = PATH_TO_ENDPOINT_MAPPING[params.gender];
	if (backEndPath) {
		return fetch(`${BACK_END_URL}/${backEndPath}`);
	} else {
		// Jeśli nie ma takiego klucza w obiekcie PATH_TO_ENDPOINT_MAPPING, to przekieruj na ścieżkę /kobieta. Redirect to element z react-router-dom.
		return redirect('/kobieta');
	}
}
