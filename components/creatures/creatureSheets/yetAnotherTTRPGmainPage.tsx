import { api } from "@/convex/_generated/api"
import { useQuery } from "convex/react"
import './yetAnother.css' // not sure if this import is working
import { useEffect, useState } from "react"

interface YetAnotherTTRPGProps {
  creatureInfo: any,
  userId: string,
  onUpdate: (info: object) => void
}

export default function YetAnotherTTRPG({
  creatureInfo,
  userId,
  onUpdate
}: YetAnotherTTRPGProps) {
  const [info, setInfo] = useState(creatureInfo)

  console.log(info)
  useEffect(() => {
    setInfo(creatureInfo)
  }, [creatureInfo])

  function updateCreatureInfo() {
    if (info != creatureInfo) {
      onUpdate(info)
    }
  }

  function tempAddInfo() {
    
  }

  return (
    <div className="test">
      Yet another ttrpg
      <button
        onClick={() => setInfo({"objectaafd fdaldf asdf ": 'adsfalksdflaksjdf;lasdf'})}
      >create</button>

      <button
        onClick={updateCreatureInfo}
      >
        update
      </button>
    </div>
  )
}