import { useQuery } from "convex/react"
import { api } from "@/convex/_generated/api"

interface messagesProps {
  roomId: string
}

export default function Messages({
  roomId
}: messagesProps) {
  const messages = useQuery(api.messages.get, { messagesGroupId: Number(roomId)})
  console.log(messages)
  return (
    <div>
      {messages?.map(({message}, index) => (
        <div key={index}>
          {message}
        </div>
      ))}
    </div>
  )
}