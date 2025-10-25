export default function CreateInfo(landMassPercentage = 50, width = 10, height = 10) {
  let info: Array<object> = []
  let id = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      const land = Math.floor(Math.random() * 100) < landMassPercentage
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