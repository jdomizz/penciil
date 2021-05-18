export interface Sketch {
  id: string;
  name: string;
  canvas: Canvas;
  animation: Animation;
}

export interface Animation {
  isPlaying: boolean;
  isDarkTheme: boolean;
  asciiText: string;
}

export interface Canvas {
  imageSrc?: string;
  isEraserMode: boolean;
}