'use client'

import { useAuth } from "@clerk/clerk-react"
import YetAnotherTTRPG from "@/components/creatures/creatureSheets/yetAnotherTTRPGmainPage"
import { use } from "react"
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

interface CreatureId {
  params: Promise<{
    creatureId: string
  }>
}

export default function CreaturePage( { params }: CreatureId ) {
  const param = use(params)
  const { userId } = useAuth()
  const { creatureId } = param
  
  const creature = useQuery(api.creatures.getUserCreature, { userId: String(userId),  _id: creatureId })
  
  return (
    <div>
      This is a creature page
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