'use client'

import { use, useEffect, useRef, useState } from "react"
import DrawFrame from "./drawFrame"
import CreateInfo from "./createInfo"

const minZoom = 0.1
const maxZoom = 10

export default function MainMap() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef(0)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0})
  const [mapDimensions, setMapDimensions] = useState({x: 45, y: 25})
  const [info, setInfo] = useState(Array<object>)

  //map movement
  const [zoom, setZoom] = useState(1)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  
  // for on load stuff
  async function onLoad() {
    
    const tempInfo = CreateInfo(mapDimensions.x, mapDimensions.y)
    setInfo(tempInfo)
    console.log(tempInfo)
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

  const handleWheelZoom = (e: WheelEvent) => {
    e.preventDefault()
    const canvas = canvasRef.current

    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const zoomFactor = e.deltaY > 0 ? 0.9 : 1.1
    const newZoom = Math.max(minZoom, Math.min(zoom * zoomFactor, maxZoom))

    const zoomRatio = newZoom / zoom
    const newOffsetX = mouseX - zoomRatio * (mouseX - offset.x)
    const newOffSetY = mouseY - zoomRatio * (mouseY - offset.y)

    setZoom(newZoom)
    setOffset({ x: newOffsetX, y: newOffSetY})
  }

  const doubleClick = () => {
    setZoom(1)
    setOffset({ x: 0, y: 0 })
  }

  const mouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDragging(true)
    setDragStart({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y
    })
  }

  const mouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isDragging) {
      setOffset({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const mouseUp = () => {
    setIsDragging(false)
  }

  // handles zoom stuff
  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return

    canvas.addEventListener('wheel', handleWheelZoom, { passive: false })

    return () => {
      canvas.removeEventListener('wheel', handleWheelZoom)
    }
  })

  useEffect(() => {
    const canvas = canvasRef.current

    if (!canvas) return
    canvas.width = dimensions.width
    canvas.height = dimensions.height

    const ctx = canvas.getContext('2d')
    if (!ctx) return
    if (!info) return

    const animate = () => {
      DrawFrame(canvas, ctx, dimensions, info, mapDimensions, zoom, offset)
      console.log('animated')
      animationRef.current = requestAnimationFrame(animate)
    }

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
    
    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [dimensions, info, zoom, offset])

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={mouseDown}
        onMouseMove={mouseMove}
        onMouseUp={mouseUp}
        onMouseLeave={mouseUp}
        onDoubleClick={doubleClick}
      >
      </canvas>

    </div>
  )
}