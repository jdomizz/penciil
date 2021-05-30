import { loadImageData } from './image';

const symbols = '01';

export async function imageToAscii(imageSrc: string): Promise<string> {
	return createAscii(await loadImageData(imageSrc));
}

function createAscii(image: ImageData): string {
	// FIXME: refactor
	if (!image) {
		return '';
	}
	return image.data.reduce((text, _, index, data) => {
		let symbol = '';
		if (index % 4 === 0) {
			if (index % image.width === 0) {
				symbol = '\n';
			} else {
				const rgba = [data[index], data[index + 1], data[index + 2], data[index + 3]];
				symbol = rgba[0] < 120 && rgba[3] >= 50 ? randomSymbol() : ' ';
			}
		}
		return `${text}${symbol}`;
	}, '');
}

export function updateAscii(text: string): string {
	return text
		.split('')
		.map((char) => replaceSymbol(char))
		.join('');
}

function replaceSymbol(char: string): string {
	return isSymbol(char) ? randomSymbol() : char;
}

function randomSymbol(): string {
	const symbol = Math.floor(Math.random() * symbols.length);
	return symbols[symbol];
}

function isSymbol(char: string): boolean {
	const filterResult = symbols.split('').filter((symbol) => symbol === char);
	return filterResult.length !== 0;
}
