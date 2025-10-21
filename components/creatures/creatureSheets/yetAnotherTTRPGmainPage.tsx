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
  const starterInfo = {
    maxHP: 10,
    currentHP: 10,
    race: 'null',
    level: 1,
    skills: [],
    passiveSkills: [],
    stats: {
      physical: 3,
      fortitude: 3,
      intellect: 3,
      charisma: 3,
    }
  }
  const [info, setInfo] = useState(() => {
    return creatureInfo && Object.keys(creatureInfo).length > 0 ? creatureInfo : starterInfo
  })

  console.log(info)
  useEffect(() => {
    if (creatureInfo && Object.keys(creatureInfo).length > 0) {
      setInfo(creatureInfo)
    }
  }, [creatureInfo])

  function updateCreatureInfo() {
    if (info != creatureInfo) {
      if (info == null || Object.keys(info).length == 0) {
        onUpdate(starterInfo)
      } else {
        onUpdate(info)
      }
    }
  }

  function addSkill() {
    setInfo((prev: {skills: any}) => ({
      ...prev,
      skills: [...prev.skills, {
        name: 'temp',
        actions: 3,
        effect: "temp effect"
      }]
    }))
  }

  function addPassiveSkill() {
    setInfo((prev: {passiveSkills: any}) => ({
      ...prev,
      passiveSkills: [...prev.passiveSkills, {
        name: 'temp passive skill',
        effect: 'temp passive skill effect'
      }]
    }))
  }

  return (
    <div className="mainGrid">
      Yet another ttrpg
      <div className="HPNameLevel">
        <div>
          <label htmlFor="hp">
            Hit Points:
          </label>
          <input
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
        <div>
          Race:
          {info.race}
        </div>
        <div>
          Level:
          {info.level}
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
      <h2>
        Skills
      </h2>
      <div>
      {info.skills.map(({name, actions, effect}: {name: string, actions: number, effect: string}, index: number) => (
      <div key={index}>
        Skill: {name}
        <div>
          Actions: {actions}
        </div>
        <div>
          Effect: {effect}
        </div>
        {index != info.skills.length - 1 ? (
          <div>
            <br></br>
          </div>
        ) : (
          <div>
          </div>
        )}
      </div>
      ))}
      </div>
      <h2>
        Passive Skills
      </h2>
      {info.passiveSkills.map(({name, effect}: {name: string, effect: string}, index: number) => (
        <div>
          Skill: {name}
          <div>
            Effect: {effect}
          </div>
          {index != info.passiveSkills.length - 1 ? (
            <div>
              <br></br>
            </div>
          ) : (
            <div>

            </div>
          )}
        </div>
      ))}

      <button
        onClick={addSkill}
      >
        addSkill
      </button>
      <button
        onClick={addPassiveSkill}
      >
        addPassiveSkill
      </button>
      <button
        onClick={updateCreatureInfo}
      >
        update
      </button>
    </div>
  )
}