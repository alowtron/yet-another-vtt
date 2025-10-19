import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import './yetAnother.css' // not sure if this import is working

interface YetAnotherTTRPGProps {
  creature: object,
  userId: string
}

export default function YetAnotherTTRPG({
  creature,
  userId
}: YetAnotherTTRPGProps) {

  return (
    <div className="test">
      Yet another ttrpg
    </div>
  )
}