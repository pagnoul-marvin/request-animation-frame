import {Rectangle} from "./shapes/Rectangle";
import {random} from "./helper";

const canvasElement: HTMLCanvasElement = document.getElementById('my-canvas') as HTMLCanvasElement;
const ctx: CanvasRenderingContext2D = canvasElement.getContext('2d');

const rect = new Rectangle(50, 25, 'pink', ctx, canvasElement);
rect.draw();
function animate() {
    rect.animate();
    requestAnimationFrame(animate);
}
animate();
canvasElement.addEventListener('click', (e) => {
    const x = e.offsetX;
    const y = e.offsetY;
    if (x >= rect.x && x <= rect.x + rect.width && y >= rect.y && y <= rect.y + rect.height) {
        rect.color = `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;
    }
});
