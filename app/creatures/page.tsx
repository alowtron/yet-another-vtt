'use client'

// import { useMutation } from "convex/react"
// import { api } from "@/convex/_generated/api"
// import { useAuth } from "@clerk/clerk-react"
import { useRouter } from "next/navigation"
import ListCreatures from "@/components/creatures/listCreatures"
import './creature.css'

export default function Creatures() {
  // const addCreature = useMutation(api.creatures.addCreature)
  
  // const { userId } = useAuth()
  const router = useRouter()

  
  return (
    <div className="mainPageContainer">
      Creature page
      <button onClick={() => router.push('./creatures/createCreature')}>Add creature</button>
      <ListCreatures>
        
      </ListCreatures>
    </div>
  )
}