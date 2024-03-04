import { redirect } from 'react-router-dom';
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from '../constants/api';
import { CATEGORIES } from '../constants/categories';

// gender i category to parametry z URL
// pole request to obiekt z danymi o zapytaniu, które jest wykonywane przez przeglądarkę. W tym obiekcie znajduje się m.in. URL zapytania
export function productListLoader({
	params: { gender, category, subcategory },
	request,
}) {
	// page to parametr z URL, który określa numer strony z produktami
	const pageUrl = new URL(request.url);
	// odczytujemy wartość parametru page z URL, jeśli nie ma takiego parametru, to domyślnie jest to strona 1
	// searchParams to obiekt, który zawiera wszystkie parametry zapytania z URL
	const page = pageUrl.searchParams.get('page') || 1;
	// sprawdzamy czy wybrane kategorie i płeć są poprawne i znajdują się w naszym obiekcie mapującym
	const foundCategory = CATEGORIES.find((c) => c.path === category);
	const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];

	if (foundCategory && foundGender) {
		let url = `${BACK_END_URL}/products/?gender=${PATH_TO_ENDPOINT_MAPPING[gender]}&category=${category}`;

		if (subcategory) {
			const foundSubcategory = foundCategory.subcategories.find(
				(sc) => sc.path === subcategory
			);

			if (foundSubcategory) {
				url = `${url}&subcategory=${subcategory}`;
			} else {
				return redirect(`/kobieta`);
			}
		}
		// dodajemy do URL parametry _limit=8&_page=1, które ograniczają liczbę produktów na stronie do 8 i wyświetlają pierwszą stronę
		url = `${url}&_limit=8&_page=${page}`;
		//  odczytujemy nagłówek X-Total-Count z odpowiedzi serwera, w którym znajduje się liczba wszystkich produktów
		return fetch(url).then((response) => {
			const numberOfPages = Math.ceil(
				Number(response.headers.get('X-Total-Count')) / 8
			);
			// nadrzędny .then zwraca obiekt z tablicą produktów i liczbą stron i czeka aż zwróci się response.json() i drugi .then
			return response.json().then((products) => {
				return {
					products,
					numberOfPages,
				};
			});
		});
	} else {
		redirect(`/kobieta`);
	}
}
