import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import './yetAnother.css' // not sure if this import is working
import { useEffect, useState } from "react"
import AddSkill from "./addSkill"
import AddPassiveSkill from "./addPassiveSkill"
import DisplayStats from "./displayStats"

interface YetAnotherTTRPGProps {
  creatureInfo: any,
  userId: string,
  onUpdate: (info: object) => void
}

const starterInfo = {
    maxHP: 10,
    currentHP: 10,
    race: 'null',
    level: 1,
    skills: [],
    passiveSkills: [],
    stats: [
      {
        name: 'physical',
        modifier: 3
      },
      {
        name: 'fortitude',
        modifier: 3
      },
      {
        name: 'intellect',
        modifier: 3
      },
      {
        name: 'charisma',
        modifier: 3
      }
    ]
  }

export default function YetAnotherTTRPG({
  creatureInfo,
  userId,
  onUpdate
}: YetAnotherTTRPGProps) {
  
  const [info, setInfo] = useState(() => {
    return creatureInfo && Object.keys(creatureInfo).length > 0 ? creatureInfo : starterInfo
  })
  const [showAddSkill, setShowAddSkill] = useState(false)
  const [showAddPassiveSkill, setShowAddPassiveSkill] = useState(false)

  const [partToShow, setPartToShow] = useState('abilities')
 
  console.log(info)
  useEffect(() => {
    if (creatureInfo && Object.keys(creatureInfo).length > 0 && creatureInfo != info) {
      setInfo(creatureInfo)
    }
  }, [creatureInfo])

  useEffect(() => {
    if(creatureInfo != info) {
      updateCreatureInfo()
    }
  }, [info])

  function updateCreatureInfo() {
    if (info != creatureInfo) {
      if (info == null || Object.keys(info).length == 0) {
        onUpdate(starterInfo)
      } else {
        onUpdate(info)
      }
    }
  }

  function addSkill(skill: object) {
    setInfo((prev: {skills: any}) => ({
      ...prev,
      skills: [...prev.skills,  skill]
    }))
  }

  function addPassiveSkill(passiveSkill: object) {
    setInfo((prev: {passiveSkills: any}) => ({
      ...prev,
      passiveSkills: [...prev.passiveSkills, passiveSkill]
    }))
  }

  function setStatInfo(index: number, statInfo: number) {
    console.log (`
      index: ${index},
      statInfo: ${statInfo}  
    `)
    
    setInfo((prev: any) => {
      const updatedStats = [...prev.stats]
      updatedStats[index] = {
        name: prev.stats[index].name,
        modifier: statInfo
      }
    
      return {
        //@ts-ignore
        ...prev,
        //@ts-ignore
        stats: updatedStats
      }
    })
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
          <input
            className="number"
            id="hp"
            value={info.level}
            onChange={(e) => 
              setInfo((prev: object) => ({
                ...prev,
                level: Number(e.target.value),
              }))
            }
            onBlur={updateCreatureInfo}
          >
          </input>
        </div>
      </div>
      <div className="partGrid">
        <div onClick={() => setPartToShow('abilities')} className="cursorPointer material-symbols-outlined center">
            Star
        </div>
        <div onClick={() => setPartToShow('skills')} className="cursorPointer material-symbols-outlined center">
          Stacks
        </div>
        <div onClick={() => setPartToShow('passiveSkills')} className="cursorPointer material-symbols-outlined center">
          Alarm_Add
        </div>
      </div>
      {partToShow == 'abilities' ? (
        <div>
          <DisplayStats
            stats={info.stats}
            onUpdate={(index, statInfo) => {setStatInfo(index, statInfo)}}
          ></DisplayStats>
        </div>
      ) : partToShow == 'skills' ? (
        <div>
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
          <br></br>
          <AddSkill
            show={showAddSkill}
            onShowUpdate={(e) => setShowAddSkill(e)}
            onUpdate={(skill) => addSkill(skill)}
          ></AddSkill>
          {!showAddSkill? (
          <button
            onClick={() => setShowAddSkill(true)}
          >
            addSkill
          </button>
          ) : (
            <div>
            </div>
          )}
        </div> 
      ) : partToShow == 'passiveSkills' ? (
        <div>
          <h2>
            Passive Skills
          </h2>
          {info.passiveSkills.map(({name, effect}: {name: string, effect: string}, index: number) => (
            <div key={index}>
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
          <br></br>
          <AddPassiveSkill
            show={showAddPassiveSkill}
            onShowUpdate={(e) => setShowAddPassiveSkill(e)}
            onUpdate={(skill) => addPassiveSkill(skill)}
          ></AddPassiveSkill>
          
          {!showAddPassiveSkill ? (
            <button
            onClick={() => setShowAddPassiveSkill(true)}
          >
            addPassiveSkill
          </button>
          ) : (
            <div>
            </div>
          )}
        </div>
      ) : (
        <div>

        </div>
      ) }
      
      
      
      
      
      
      <button
        onClick={updateCreatureInfo}
      >
        update
      </button>
    </div>
  )
}