export async function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = (): void => resolve(image);
    image.src = src;
  });
}
