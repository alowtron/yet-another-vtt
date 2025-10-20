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
          <label htmlFor="maxHP">
            Max Hit Points: 
          </label>
          <input
            id="maxHP"
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
        </div>
        <div>
          <label htmlFor="currentHP">
            Current Hit Points: 
          </label>
          {info.currentHP}
        </div>
      </div>
      <div className="statGrid">
        <div>
          {info.stats.physical}
        </div>
        <div>
          {info.stats.fortitude}
        </div>
        <div>
          {info.stats.intellect}
        </div>
        <div>
          {info.stats.charisma}
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