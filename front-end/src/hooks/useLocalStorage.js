import { useState } from 'react';

export function useLocalStorage(key, defaultValue) {
	function getJSONFromLocalStorage() {
		return localStorage[key] ? JSON.parse(localStorage[key]) : defaultValue;
	}

	const [data, setData] = useState(() => getJSONFromLocalStorage());

	function setJSONTOLocalStorage(newData) {
		setData(newData);
		localStorage[key] = JSON.stringify(newData);
	}

	return [data, setJSONTOLocalStorage];
}
