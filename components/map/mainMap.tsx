'use client'

import { useEffect, useRef, useState } from "react"

export default function MainMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)


  const [dimensions, setDimensions] = useState({ width: 0, height: 0})

  useEffect(() => {
    function updateDimensions() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = dimensions.width
      canvas.height = dimensions.height

      const ctx = canvas.getContext('2d')
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0070f3'
      ctx.fillRect(10, 10, 100, 100)

    }

    
  }, [dimensions])

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{
          width: '100dvh',
          height: '100dvh',
          border: '1px solid #ccc'
        }}
      >
      
      </canvas>
    </div>
  )
}