import { useState } from "react"

interface rightSideBarProps {
  roomId: string
}

export default function RightSideBar({
  roomId
}: rightSideBarProps) {
  const [partToShow, setPartToShow] = useState<string> ('messages')
  return (
    <div className="rightSideBarGrid">
      <div className="rightSideBarNavGrid">
        <div onClick={() => setPartToShow('messages')} className="cursorPointer material-symbols-outlined">
          chat
        </div>
        <div onClick={() => setPartToShow('settings')} className="cursorPointer material-symbols-outlined">
          settings
        </div>

      </div>
      <div>
        {partToShow == 'messages' ? (
          <div>
            messages {roomId}
          </div>
        ) : (
          <div>
            Not Selected
          </div>
        )}
      </div>
    </div>
  )
}