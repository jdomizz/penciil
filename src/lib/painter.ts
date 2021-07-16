export class Painter {
  private context: CanvasRenderingContext2D;
  private isEnabled: boolean;
  private offsetX: number;
  private offsetY: number;

  private static getOffsetX(event: MouseEvent | TouchEvent): number {
    return event instanceof TouchEvent ? event.targetTouches[0].clientX : event.offsetX;
  }

  private static getOffsetY(event: MouseEvent | TouchEvent): number {
    return event instanceof TouchEvent ? event.targetTouches[0].clientY : event.offsetY;
  }
  constructor(canvas: HTMLCanvasElement) {
    this.context = canvas.getContext('2d');
    this.context.fillStyle = 'white';
    this.context.fillRect(0, 0, canvas.width, canvas.height);
    this.context.lineJoin = 'round';
    this.context.lineCap = 'round';
    this.context.lineWidth = 20;
    this.context.strokeStyle = 'black';
  }

  paint(event: MouseEvent | TouchEvent): void {
    if (this.isEnabled) {
      const offsetX = Painter.getOffsetX(event);
      const offsetY = Painter.getOffsetY(event);
      this.context.beginPath();
      this.context.moveTo(this.offsetX, this.offsetY);
      this.context.lineTo(offsetX, offsetY);
      this.context.stroke();
      this.offsetX = offsetX;
      this.offsetY = offsetY;
    }
  }

  enable(event: MouseEvent | TouchEvent): void {
    this.offsetX = Painter.getOffsetX(event);
    this.offsetY = Painter.getOffsetY(event);
    this.isEnabled = true;
  }

  disable(): void {
    this.isEnabled = false;
  }

  get enabled(): boolean {
    return this.isEnabled;
  }

  set eraser(value: boolean) {
    this.context.strokeStyle = value ? 'white' : 'black';
  }
}
