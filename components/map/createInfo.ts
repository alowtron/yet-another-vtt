export default function CreateInfo(width = 10, height = 10) {
  let info: Array<object> = []
  let id = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const land = Math.floor(Math.random() * 100) < 50
      const tileType = land ? 'grass' : 'water'
      info.push({
        id: id,
        tileType: tileType
      })
      id++ 
    }
  }
  return info
}