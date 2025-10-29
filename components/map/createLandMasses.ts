// info currently has id and tileType
// tileType is currently water or grass, more to come
const margin = 0.15
/**
 * generates the world based on given information
 * @param info an object {
 *  id: number, increasing by one
 *  tileType: tileType type of land that it is, currently only have water and grass and then continent
 * }
  * @param {number} width 
 * @param {number} height 
 * @param {number} outsideBorderForce 
 * @param {number} continents 
 * @returns 
 */

const baseLandChance = 90
const stayWaterChance = 90
const changeToWaterChance = 80
function distanceToBorder(x: number, y: number, width: number, height: number) {
  return Math.min(x, y, width - 1 - x, height - 1 - y)
}


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

  function generatePercent() {
    return Math.floor(Math.random() * 100)
  }
  
  function preSim() {
    for (let i = 0; i < tempInfo.length; i++) {
      tempInfo[i] = {
        id: tempInfo[i].id,
        tileType: tempInfo[i].tileType,
        height: tempInfo[i].tileType == 'water' ? 0 : 1,
        temp: 70
      }
    }
  }

  
  preSim()
  console.log('After preSim')
  console.log(tempInfo)

  function simulateFirstThousandYears() {
  }

  function checkForLand(id: number) {
    if (
      tempInfo[id].height == 1 &&
      tempInfo[id - 1].height < 1 &&
      tempInfo[id + 1].height < 1 &&
      tempInfo[id - height].height < 1 &&
      tempInfo[id + height].height < 1
    ) {
      const randomDirection = Math.floor(Math.random() * 4)
      const functionHeight = tempInfo[id].height
      const tileType = tempInfo[id].tileType
      if (randomDirection == 0) {
        tempInfo[id - 1].height = functionHeight
        tempInfo[id - 1].tileType = 'continent'
      } else if (randomDirection == 1) {
        tempInfo[id + 1].height = functionHeight
        tempInfo[id + 1].tileType = 'continent'
      } else if (randomDirection == 2) {
        tempInfo[id - height].height = functionHeight
        tempInfo[id - height].tileType = 'continent'
      } else {
        tempInfo[id + height].height = functionHeight
        tempInfo[id + height].tileType = 'continent'
      }
      tempInfo[id].height = 0
      tempInfo[id].tileType = 'water'
    }
  }

  let id = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (
        i != 0 &&
        i != height - 1 &&
        j != 0 &&
        j != width - 1
      ) {
        checkForLand(id)
      }
      
      id++
    }
  }

  id = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (
        i != 0 &&
        i != height - 1 &&
        j != 0 &&
        j != width - 1
      ) {
        checkForLand(id)
      }
      
      id++
    }
  }

  id = 0
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      if (
        i != 0 &&
        i != height - 1 &&
        j != 0 &&
        j != width - 1
      ) {
        checkForLand(id)
      }
      
      id++
    }
  }

  return tempInfo
  
  
  
} 