'use client'

import { use, useEffect, useRef, useState } from "react"
import DrawFrame from "./drawFrame"
import CreateInfo from "./createInfo"

export default function MainMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0})
  const [info, setInfo] = useState(Array<object>)
  // for on load stuff
  async function onLoad() {
    const tempInfo = await CreateInfo()
    setInfo(tempInfo)
  }

  useEffect(() => { 
    onLoad()
  }, [])
  
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
    if (!info) return

    const animate = () => {
      DrawFrame(canvas, ctx, dimensions, info)
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
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