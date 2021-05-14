export class Painter {
  private context: CanvasRenderingContext2D;
  private isBrushEnabled: boolean;

  private static getOffsetX(event: MouseEvent | TouchEvent): number {
    return event instanceof TouchEvent
      ? event.targetTouches[0].clientX
      : event.offsetX;
  }
  
  private static  getOffsetY(event: MouseEvent | TouchEvent): number {
    return event instanceof TouchEvent
      ? event.targetTouches[0].clientY
      : event.offsetY;
  }
  constructor(canvas: HTMLCanvasElement) {
    this.context = canvas.getContext("2d");
    this.context.fillStyle = "white";
    this.context.fillRect(0, 0, canvas.width, canvas.height);
    this.context.lineJoin = "round";
    this.context.lineCap = "round";
    this.context.lineWidth = 20;
    this.context.strokeStyle = "black";
  }

  paint(event: MouseEvent | TouchEvent): void {
    if (this.brushEnabled) {
      const offsetX = Painter.getOffsetX(event);
      const offsetY = Painter.getOffsetY(event);
      this.context.beginPath();
      this.context.moveTo(offsetX, offsetY);
      this.context.lineTo(offsetX, offsetY);
      this.context.stroke();
    }
  }

  set brushEnabled(value: boolean) {
    this.isBrushEnabled = value;
  }

  get brushEnabled(): boolean {
    return this.isBrushEnabled;
  }

  set eraserMode(value: boolean) {
    this.context.strokeStyle = value ? "white" : "black";
  }
}
