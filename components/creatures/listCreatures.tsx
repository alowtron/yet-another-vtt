
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
      {creatures?.map(({ creatureName, _id }, index) => (
        <div key={index}>
          <Link href={`/creatures/${_id}`}>
            {creatureName}
          </Link>
        </div>
      ))} 
    </div>
  )
}