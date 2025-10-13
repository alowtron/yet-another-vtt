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
        
        Hello, welcome to roomId: { roomId }
        <div onClick={toggleRightSide} className="rightSideToggler material-symbols-outlined">
          menu
        </div>
      </div>

      {/* <div></div> */}
      <div className="rightSideBar">
        <RightSideBar>
        </RightSideBar>
      </div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

      
    </div>
  )
}