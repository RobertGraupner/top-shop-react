// Obiekt, który mapuje wartości param na takie nazwy, jakie są w endpointach backendowych.
export const PATH_TO_ENDPOINT_MAPPING = {
	kobieta: 'women',
	mezczyzna: 'men',
	dziecko: 'children',
};
// adres URL backendu. Najlepiej przechowywać go w zmiennej, w razie zmiany adresu nie trzeba będzie zmieniać wszystkich miejsc, gdzie jest używany.
export const BACK_END_URL = 'http://localhost:3000';
