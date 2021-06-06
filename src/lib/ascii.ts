import { loadImage } from './image';

const palette = '01';

// FIXME: repetido
const size = () => window.innerWidth < window.innerHeight 
    ? window.innerWidth
    : window.innerHeight;

const offset = () => window.innerWidth > 440 ? 7 : 8;

export async function imageToAscii(imageSrc: string): Promise<string> {
  const image = await loadImage(imageSrc);
  const canvas = document.createElement('canvas');
  canvas.width = size() / offset(); // offset(); // 6; // -> font-size
  canvas.height = size() / 10; // -> line-height
  const context = canvas.getContext('2d');
  context.drawImage(image, 0, 0, canvas.width, canvas.height);
  const data = context.getImageData(0, 0, canvas.width, canvas.height);
  return data ? createAscii(data) : '';
}

function createAscii(image: ImageData): string {
  let result = '';
  for (let i = 0; i < image.data.length; i += 4) {
    if ( i % image.width === 0){
      result = result.concat('\n');
    } else {
      const red = image.data[i];
      const alpha = image.data[i+3];
      if (red < 120 && alpha >= 50) {
        result = result.concat(randomPaletteChar());
      } else {
        result = result.concat(' ');
      }
    }
  }
  return result;
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
