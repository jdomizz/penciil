import type { Animation } from "./animation";
import type { Canvas } from "./canvas";

export class Sketch {
  id: string;
  name: string;
  canvas: Canvas;
  animation: Animation;
}