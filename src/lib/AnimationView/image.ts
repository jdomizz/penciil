export async function loadImageData(src: string): Promise<ImageData> {
  const image = await loadImage(src);
  const data = getImageData(image);
  return new Promise((resolve) => resolve(data));
}

async function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = (): void => resolve(image);
    image.src = src;
  });
}

function getImageData(image: HTMLImageElement): ImageData {
  let data = null;
  const canvas = document.createElement("canvas");
  // FIXME: magic numbers
  canvas.width = window.innerWidth / 6;
  canvas.height = window.innerHeight / 10;
  const context = canvas.getContext("2d");
  if (context) {
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    data = context.getImageData(0, 0, canvas.width, canvas.height);
  }
  return data;
}