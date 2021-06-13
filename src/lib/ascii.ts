import { loadImage } from './image';

const glyphs = '01';
const glyphWidth = 6;
const glyphHeight = 10;

export async function imageToAscii(imageSrc: string): Promise<string> {
  const image = await loadImage(imageSrc);
  const canvas = document.createElement('canvas');
  canvas.width =  image.width / glyphWidth;
  canvas.height = image.height / glyphHeight;
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
        result = result.concat(randomGlyph());
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
    .map((char) => isGlyph(char) ? randomGlyph() : char)
    .join('');
}

function randomGlyph(): string {
  return glyphs[Math.floor(Math.random() * glyphs.length)];
}

function isGlyph(char: string): boolean {
  return glyphs
    .split('')
    .filter((glyph) => glyph === char)
    .length === 1;
}
