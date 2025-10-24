export default function CreateInfo(size = 100, width = 10, height = 10) {
  let info: Array<object> = []
  let id = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      info.push({id: id})
      id++ 
    }
  }
  return info
}