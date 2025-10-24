'use client'

import { useEffect, useRef, useState } from "react"
import DrawFrame from "./drawFrame"

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
    if (!canvas) return
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    ctx.fillStyle = '#0070f3'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    DrawFrame(canvas, ctx, dimensions)
  }, [dimensions])

  return (
    <div>
      <canvas
        ref={canvasRef}
      >
      </canvas>
    </div>
  )
}