'use client'

import { use } from 'react'
import './room.css'
import RightSideBar from '@/components/room/rightSideBar'
interface RoomProps {
  params: Promise<{
    roomId: string
  }>
}

export default function Room( { params }: RoomProps ) {
  const param = use(params)
  const { roomId } = param

  function toggleRightSide() {
    console.log('toggled')
    // const rightSideBar = document.getElementById('rightSideBar')
    // console.log(rightSideBar)

    // rightSideBar?.classList.toggle('collapsed')
    document.querySelector('.mainGrid')?.classList.toggle('collapsed')

  }
  return (
    <div className="mainGrid">
      <div>
        Hello
        Hello, welcome to roomId: { roomId }
        <button onClick={toggleRightSide}>toggle</button>
      </div>

      {/* <div></div> */}
      <div className="rightSideBar">
        <RightSideBar>
        </RightSideBar>
      </div>
      
      
    </div>
  )
}