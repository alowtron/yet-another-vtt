// info currently has id and tileType
// tileType is currently water or grass, more to come
const margin = 0.15
export default function CreateLandMasses(info: any, width: number, height: number, outsideBorderForce: number, continents: number ) {
  let tempInfo: Array<any> = info
  function generateContinentsStarters() {
    const pointArray = []
    for (let i = 0; i < continents; i++ ) {
      const x = Math.floor(Math.random() * (width - outsideBorderForce * 2)) + outsideBorderForce
      const y = Math.floor(Math.random() * (height - outsideBorderForce * 2)) + outsideBorderForce
      tempInfo[y * width + x ].tileType = 'continent'
    }
    
  }

  generateContinentsStarters()
  
  
  let id = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      
      id++
    }
  }
  return tempInfo
} 