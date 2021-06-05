import { loadImage } from './image';

const palette = '01';

export async function imageToAscii(imageSrc: string): Promise<string> {
  const image = await loadImage(imageSrc);
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth / 6; // -> font-size
  canvas.height = window.innerHeight / 10; // -> line-height
  const context = canvas.getContext('2d');
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  const data = context.getImageData(0, 0, canvas.width, canvas.height);
  return data ? createAscii(data) : '';
}

function createAscii(image: ImageData): string {
  return image.data.reduce((text, _, index, data) => {
    let char = '';
    if (index % 4 === 0) {
      if (index % image.width === 0) {
        char = '\n';
      } else {
        const rgba = [data[index], data[index + 1], data[index + 2], data[index + 3]];
        char = rgba[0] < 120 && rgba[3] >= 50 ? randomPaletteChar() : ' ';
      }
    }
    return `${text}${char}`;
  }, '');
}

export function updateAscii(text: string): string {
  return text
    .split('')
    .map((char) => isInPalette(char) ? randomPaletteChar() : char)
    .join('');
}

function randomPaletteChar(): string {
  return palette[Math.floor(Math.random() * palette.length)];
}

function isInPalette(char: string): boolean {
  return palette
    .split('')
    .filter((item) => item === char)
    .length === 1;
}
