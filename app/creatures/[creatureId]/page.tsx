'use client'

import { useAuth } from "@clerk/clerk-react"
import YetAnotherTTRPG from "@/components/creatures/creatureSheets/yetAnotherTTRPGmainPage"
import { use } from "react"
import { useMutation, useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import './creature.css'
import CreatureName from "@/components/creatures/creatureName"

interface CreatureId {
  params: Promise<{
    creatureId: string,
  }>
}

export default function CreaturePage( { params }: CreatureId ) {
  const param = use(params)
  const { userId } = useAuth()
  const { creatureId } = param
  
  const creature = useQuery(api.creatures.getUserCreature, { userId: String(userId),  _id: creatureId })
  const updateCreature = useMutation(api.creatures.updateUserCreature)
  console.log(creature)

  async function handleUpdateCreature(newName = creature?.creatureName) {
    if (
      !creature?._id ||
      !newName ||
      !userId
    ) {
      return
    }
    try {
      await updateCreature({
        _id: creatureId,
        creatureName: newName,
        userId: userId,
        creatureInfo: {}
      })
    } catch {
      console.error("Failed to update creature")
    }
    
  }
  
  return (
    <div className="mainPageContainer">
      <div >
        <CreatureName
          creatureName={creature?.creatureName || 'Loading Name'}
          onUpdate={(newName) => handleUpdateCreature(newName = newName)}
        >
      </CreatureName>
      </div>
      
      {/* This is a creature page test test test test test test test test test test test test test test test test test test */}
      {creature?.creatureType == 'yet_another_ttrpg' ? (
        <YetAnotherTTRPG
          creature={creature || Object}
          userId={userId || ''}
        >
        </YetAnotherTTRPG>
      ) : (
        <div>

        </div>
      )}
      
    </div>
  )
}