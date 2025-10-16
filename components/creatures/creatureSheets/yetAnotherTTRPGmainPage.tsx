import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"

interface YetAnotherTTRPGProps {
  creature: object,
  userId: string
}

export default function YetAnotherTTRPG({
  creature,
  userId
}: YetAnotherTTRPGProps) {

  return (
    <div>
      Yet another ttrpg
    </div>
  )
}