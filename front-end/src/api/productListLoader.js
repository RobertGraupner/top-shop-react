import { redirect } from 'react-router-dom';
import { BACK_END_URL, PATH_TO_ENDPOINT_MAPPING } from '../constants/api';
import { CATEGORIES } from '../constants/categories';

// gender i category to parametry z URL
export function productListLoader({ params: { gender, category, subcategory } }) {
	// sprawdzamy czy wybrane kategorie i płeć są poprawne i znajdują się w naszym obiekcie mapującym
	const foundCategory = CATEGORIES.find((c) => c.path === category);
	const foundGender = PATH_TO_ENDPOINT_MAPPING[gender];
	
	if (foundCategory && foundGender) {
		let url = `${BACK_END_URL}/products/?gender=${PATH_TO_ENDPOINT_MAPPING[gender]}&category=${category}`;

		if (subcategory) {
			const foundSubcategory = foundCategory.subcategories.find((sc) => sc.path === subcategory);

			if (foundSubcategory) {
				url = `${url}&subcategory=${subcategory}`;
			} else {
				return redirect(`/kobieta`);
			}
		}
		return fetch(url);
	} else {
		redirect(`/kobieta`);
	}
}
