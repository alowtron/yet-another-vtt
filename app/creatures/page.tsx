'use client'

import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useAuth } from "@clerk/clerk-react"

export default function Creatures() {
  const addCreature = useMutation(api.creatures.addCreature)
  const { userId } = useAuth()

  function addCreatureFunction() {
    if (userId) {
      addCreature({
        userId: userId,
        creatureType: "yet_another_ttrpg",
        creatureName: 'temp',
        creatureInfo: {}
      })
    }
    
  }
  return (
    <div>
      Creature page
      <button onClick={() => addCreatureFunction()}>Add creature</button>
    </div>
  )
}