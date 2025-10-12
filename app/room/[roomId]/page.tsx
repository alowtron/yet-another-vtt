import { notFound } from 'next/navigation'

interface RoomProps {
  params: {
    roomId: string
  }
}

export default async function Room( { params }: RoomProps ) {
  const { roomId } = await params
  console.log(roomId)
  return (
    <div>
      Hello, welcome to roomId: { roomId }
    </div>
  )
}