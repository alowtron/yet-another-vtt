import { notFound } from 'next/navigation'

interface RoomProps {
  params: {
    roomId: string
  }
}

export default function Room( { params }: RoomProps ) {
  const { roomId } = params
  console.log(roomId)
  return (
    <div>
      Hello, welcome to roomId: { roomId }
    </div>
  )
}