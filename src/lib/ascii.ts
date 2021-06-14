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

function createAscii(data: ImageData): string {  
  let result = '';
  for (let y = 0; y < data.height; y++) {
    for (let x = 0; x < data.width; x++) {
      const rgbaParts = 4;
      const rgbaIndex = x * rgbaParts + y * rgbaParts * data.width;
      const redComponent = data.data[rgbaIndex];
      const alphaComponent = data.data[rgbaIndex + 3];
      const isStroke = redComponent < 120 && alphaComponent >= 50;
      const char = isStroke ? randomGlyph() : ' ';
      result = result.concat(char);
    }
    result = result.concat('\n');
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
