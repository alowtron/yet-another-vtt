import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import './yetAnother.css' // not sure if this import is working
import { useEffect, useState } from "react"

interface YetAnotherTTRPGProps {
  creatureInfo: any,
  userId: string,
  onUpdate: (info: object) => void
}

export default function YetAnotherTTRPG({
  creatureInfo,
  userId,
  onUpdate
}: YetAnotherTTRPGProps) {
  const [info, setInfo] = useState(creatureInfo)

  console.log(info)
  useEffect(() => {
    setInfo(creatureInfo)
  }, [creatureInfo])

  function updateCreatureInfo() {
    if (info != creatureInfo) {
      if (info == null || Object.keys(info).length == 0) {
        onUpdate({
          maxHP: 10,
          currentHP: 10,
          race: 'input race here',
          skills: [],
          passiveSkills: [],
          stats: {
            physical: 3,
            fortitude: 3,
            intellect: 3,
            charisma: 3,
          }
        })
      } else {
        onUpdate(info)
      }
      
    }
  }


  return (
    <div className="mainGrid">
      Yet another ttrpg
      <div className="hitPointGrid">
        <div>
          <label htmlFor="hp">
            Hit Points:
          </label>
          <input
            // type="number"
            className="number"
            id="hp"
            value={info.maxHP}
            onChange={(e) => 
              setInfo((prev: object) => ({
                ...prev,
                maxHP: Number(e.target.value),
              }))
            }
            onBlur={updateCreatureInfo}
          >
          </input>
          /
          <input
            // type="number"
            className="number"
            id="hp"
            value={info.currentHP}
            onChange={(e) => 
              setInfo((prev: object) => ({
                ...prev,
                currentHP: Number(e.target.value),
              }))
            }
            onBlur={updateCreatureInfo}
          >
          </input>
        </div>
      </div>
      <div className="statGrid">
        <div className="eachStatGrid">
          <div className="center">
            Physical
          </div>
          <div className="center">
            {info.stats.physical}
          </div>
        </div>
        <div className="eachStatGrid">
          <div className="center">
            Fortitude
          </div>
          <div className="center">
            {info.stats.fortitude}
          </div>
        </div>
        <div className="eachStatGrid">
          <div className="center">
            Intellect
          </div>
          <div className="center">
            {info.stats.intellect}
          </div>
        </div>
        <div className="eachStatGrid">
          <div className="center">
            Charisma
          </div>
          <div className="center">
            {info.stats.charisma}
          </div>
        </div>
      </div>
      <button
        onClick={updateCreatureInfo}
      >
        update
      </button>
    </div>
  )
}