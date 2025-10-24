export default function DrawFrame(
  canvas: HTMLCanvasElement, 
  ctx: CanvasRenderingContext2D, 
  dimensions: {width: number, height: number},
  info: Array<object>,
) {

  
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  
  ctx.fillStyle = "white"
  ctx.fillRect(0, 0, 50, 50)
}