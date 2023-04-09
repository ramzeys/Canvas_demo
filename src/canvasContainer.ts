import {
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  RADIUS,
} from './constants';


export class CanvasContainer {
  width = CANVAS_WIDTH;

  height = CANVAS_HEIGHT;

  context: CanvasRenderingContext2D;

  element: HTMLCanvasElement;

  constructor(canvasElement: HTMLCanvasElement) {

    const canvasContext = canvasElement.getContext('2d');

    this.context = canvasContext as CanvasRenderingContext2D;
    this.element = canvasElement;

    this.element.width = CANVAS_WIDTH;
    this.element.height = CANVAS_HEIGHT;
  }

  rect({
    x, y, width, height, color, borderColor,
  }: any) {
    const usedRadius = RADIUS;
    this.context.beginPath();
    this.context.moveTo(x, y + height - usedRadius);
    this.context.arcTo(x, y, x + usedRadius, y, usedRadius);
    this.context.lineTo(x + width - usedRadius, y);
    this.context.arcTo(x + width, y, x + width, y + usedRadius, usedRadius);
    this.context.lineTo(x + width, y + height - usedRadius);
    this.context.arcTo(x + width, y + height, x + usedRadius, y + height, usedRadius);
    this.context.lineTo(x + usedRadius, y + height);
    this.context.arcTo(x, y + height, x, y, usedRadius);

    if (borderColor) {
      this.context.strokeStyle = borderColor;
      this.context.stroke();
    }

    if (color) {
      this.context.fillStyle = color;
      this.context.fill();
    }
  }

  update({
    x, y, width, height, color, borderColor,
  }: any) {
    this.rect({
      x, y, width, height, color, borderColor,
    } as any);
  }
}
