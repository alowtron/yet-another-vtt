export default function DrawFrame(
  canvas: HTMLCanvasElement, 
  ctx: CanvasRenderingContext2D, 
  dimensions: {width: number, height: number},
  info: Array<object>,
  number: number,
  mapDimensions: object,
  gridSize: number = 8  
) {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  let startX = 0
  let startY = 0
  let index = 0
  // @ts-ignore
  for (let i = 0; i < mapDimensions.y; i++) {
    const startRectY = i * gridSize
    //@ts-ignore
    for (let j = 0; j < mapDimensions.x; j++) {
      //@ts-ignore
      if (info[index].tileType == 'water') {
        ctx.fillStyle = 'blue'
      } else {
        ctx.fillStyle = 'green'
      }
      const startRectX = j * gridSize
      ctx.fillRect(startRectX, startRectY, gridSize, gridSize)
      index++
    }
  }

}