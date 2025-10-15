import { useQuery, useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import TextareaAutosize from 'react-textarea-autosize'
import { useState, FormEvent, KeyboardEvent } from "react"

interface messagesProps {
  roomId: string,
  userId: string
}

export default function Messages({
  roomId,
  userId
}: messagesProps) {
  const messages = useQuery(api.messages.get, { roomId: Number(roomId), userId: userId})
  const [messageInput, setMessageInput] = useState<string> ('')
  console.log(messages)

  const send = useMutation(api.messages.send)

  async function submitMessage(e: FormEvent) {
    e.preventDefault()
    sendMessage(messageInput, 'temp', userId, Date.now())
    setMessageInput('')
  }

  async function sendMessage(message: string, userName: string, userId: string, timeSent: number) {
    await send({
      roomId: Number(roomId),
      message,
      userName,
      userId,
      timeSent
    })
  }

  async function onKeyDown(e: KeyboardEvent) {
    if (e.key == "Enter" && !e.shiftKey) {
      e.preventDefault()
      submitMessage(e)
    }
  }

  return (
    <div>
      {messages?.map(({message, userName}, index) => (
        <div key={index}>
          <div>
          {userName}:
          </div>
          {message}
          <br></br>
        </div>
      ))}
      
      <form onSubmit={submitMessage} >
        <TextareaAutosize
          onKeyDown={onKeyDown}
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
        >
        </TextareaAutosize>
        <button type="submit">Send Message</button>
      </form>
    </div>
  )
}