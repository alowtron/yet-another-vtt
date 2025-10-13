import { useQuery, useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import TextareaAutosize from 'react-textarea-autosize'
import { useState } from "react"

interface messagesProps {
  roomId: string
}

export default function Messages({
  roomId
}: messagesProps) {
  const messages = useQuery(api.messages.get, { messagesGroupId: Number(roomId)})
  const [messageInput, setMessageInput] = useState<string> ('')
  console.log(messages)

  const send = useMutation(api.messages.send)

  async function submitMessage(e: React.FormEvent) {
    e.preventDefault()
    sendMessage(messageInput, 'temp', 120, Date.now())
  }
  async function sendMessage(message: string, userName: string, userId: number, timeSent: number) {
    await send({
      messagesGroupId: Number(roomId),
      message,
      userName,
      userId,
      timeSent
    })
  }



  return (
    <div>
      {messages?.map(({message}, index) => (
        <div key={index}>
          {message}
        </div>
      ))}
      
      <form onSubmit={submitMessage} >
        <TextareaAutosize
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        >
        </TextareaAutosize>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}