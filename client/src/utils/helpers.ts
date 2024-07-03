export function centsToDollar(cents: number): string {
	return (cents / 100).toFixed(2);
}

export function capitalizeFirstLetter(string: string) {
	if (!string) return string; // Retorna la misma cadena si es nula o vacía
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeWords(string?: string) {
	if (string) {
		return string
			.split(" ")
			.map((word) => capitalizeFirstLetter(word))
			.join(" ");
	} else {
		return "";
	}
}
