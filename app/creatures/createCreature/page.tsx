'use client'

import { useAuth } from "@clerk/clerk-react"
import { useState } from "react"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useRouter } from "next/navigation"

const creatureTypeToSelect = [
  {
    name: 'YetAnotherTTRPG',
    value: 'yet_another_ttrpg'
  },
  {
    name: 'example, do not click',
    value: ''
  }
]

export default function CreateCreature() {
  const [creatureType, setCreatureType] = useState('')
  const [creationPart, setCreationState] = useState('')

  const addCreature = useMutation(api.creatures.addCreature)
  const { userId } = useAuth()
  const router = useRouter()

  function addCreatureFunction(creatureInfo = {}, creatureName = 'new creature') {
    if (userId) {
      addCreature({
        userId: userId,
        creatureType: "yet_another_ttrpg",
        creatureName: creatureName,
        creatureInfo: creatureInfo
      })
    }
    router.push('../creatures')
  }

  function createCreature(type: string) {
    let creationInfo = {
      maxHP: 10,
      currentHP: 10,
      race: 'null',
      speed: 20,
      level: 1,
      physicalDR: 0,
      magicalDR: 0,
      skills: [],
      passiveSkills: [],
      inventory: [
        {
          name: 'backpack',
          weight: 1
        },
        {
          name: 'bread',
          weight: 0.1
        }
      ],
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

    if (type == 'tank') {
      creationInfo.maxHP = 12
      creationInfo.currentHP = 12
      creationInfo.race = 'dwarf'
      addCreatureFunction(creationInfo, 'tank')
    } else if (type == 'fighter') {

    }

    
  }

  return (
    <div>
      Create A creature
      {creatureType == 'yet_another_ttrpg' ? (
        <div>
          {creationPart == '' ? (
            <div>
              <button onClick={() => addCreatureFunction()}>
                Empty Character
              </button>
              <br></br>
              <button onClick={() => setCreationState('quick')}>
                Quick Character Creation
              </button>
            </div>
          ) : creationPart == 'quick' ? (
            <div>
              <h2>
                Fighting Style?
              </h2>
              <button onClick={() => setCreationState('weapons')}>
                Weapons
              </button>
              <button>
                Magic
              </button>
            </div>
          ): creationPart == 'weapons' ? (
            <div>
              <h2>
                Fighting Style?
              </h2>
              <button onClick={() => setCreationState('melee')}>
                Melee
              </button>
              <button onClick={() => setCreationState('ranged')}>
                Ranged
              </button>
            </div>
          ) : creationPart == 'melee' ? (
            <div>
              <h2>
                Melee Fighting Style
              </h2>
              <button onClick={() => createCreature('tank')}>
                Tank
              </button>
              <button>
                Fighter
              </button>
            </div>
          ) : creationPart == 'ranged' ? (
            <div>
              <h2>
                Ranged Fighting Style
              </h2>
              <button>
                Ranger
              </button>
              <button>
                Rogue
              </button>
            </div>
          ) : (
            <div>
              this should not be showing
            </div>
          )}
        </div>
      ) : (
        <div>
          <h3>
            Select the system and type of creature you want to create
          </h3>
          {creatureTypeToSelect.map(({name, value}: {name: string, value: string}, index) => (
            <div key={index}>
              <button onClick={() => setCreatureType(value)}>
                {name}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}