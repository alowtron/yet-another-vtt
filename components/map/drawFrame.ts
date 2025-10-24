export default function DrawFrame(
  canvas: HTMLCanvasElement, 
  ctx: CanvasRenderingContext2D, 
  dimensions: {width: number, height: number},
  info: Array<object>,
  number: number,
  gridSize: number = 8  
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  let startX = 0
  let startY = 0

  for (let i = 0; i < info.length / 10; i++) {
    const startRectY = i * gridSize
    for (let j = 0; j < info.length / 10; j++) {
      //@ts-ignore
      if (info[i + j].id %  2 == 0) {
        ctx.fillStyle = "white"
      } else {
        ctx.fillStyle = 'blue'
      }
      const startRectX = j * gridSize
      ctx.fillRect(startRectX, startRectY, gridSize, gridSize)
    }
  }

  ctx.font = '20px Arial'
  ctx.fillStyle = 'yellow'
  ctx.fillText(`${number}`, 50, 50)
  

  
  // ctx.fillStyle = "white"
  // ctx.fillRect(0, 0, 50, 50)
}