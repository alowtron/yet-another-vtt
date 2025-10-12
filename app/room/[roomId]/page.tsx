import './room.css'
import RightSideBar from '@/components/room/rightSideBar'
interface RoomProps {
  params: {
    roomId: string
  }
}

export default async function Room( { params }: RoomProps ) {
  const { roomId } = await params
  return (
    <div className="mainGrid">
      <div>
        Hello
        Hello, welcome to roomId: { roomId }
      </div>
      
      <RightSideBar>
      </RightSideBar>
      
    </div>
  )
}