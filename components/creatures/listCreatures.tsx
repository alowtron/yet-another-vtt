
import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useAuth } from "@clerk/clerk-react"
import Link from "next/link"

export default function ListCreatures() {
  const { userId } = useAuth()
  const creatures = useQuery(api.creatures.getUserCreatureList, { userId: userId || '' })
  console.log(creatures)

  return (
    <div>
      {creatures?.map(({ creatureName, creatureType, _id }, index) => (
        <div key={index} className="nameList">
          <Link href={`/creatures/${_id}`} className="nameListItem">
            Name: {creatureName}
            <br></br>
            Creature Type: {creatureType}
          </Link>
        </div>
      ))} 
    </div>
  )
}