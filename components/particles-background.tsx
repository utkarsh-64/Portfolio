"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface GridNode {
  x: number
  y: number
  active: boolean
  pulse: number
  connections: number[]
}

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()
  const nodesRef = useRef<GridNode[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createGrid = () => {
      const nodes: GridNode[] = []
      const spacing = 80
      const cols = Math.ceil(canvas.width / spacing)
      const rows = Math.ceil(canvas.height / spacing)

      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = i * spacing
          const y = j * spacing
          const index = i * rows + j

          nodes.push({
            x,
            y,
            active: Math.random() > 0.7,
            pulse: Math.random() * Math.PI * 2,
            connections: [],
          })

          // Create connections to adjacent nodes
          if (i > 0) nodes[index]?.connections.push((i - 1) * rows + j)
          if (j > 0) nodes[index]?.connections.push(i * rows + (j - 1))
        }
      }

      nodesRef.current = nodes
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const isDark = theme === "dark"
      const time = Date.now() * 0.001

      nodesRef.current.forEach((node, index) => {
        // Update pulse
        node.pulse += 0.02

        // Randomly activate/deactivate nodes
        if (Math.random() < 0.002) {
          node.active = !node.active
        }

        // Draw connections
        node.connections.forEach((connIndex) => {
          const connNode = nodesRef.current[connIndex]
          if (!connNode) return

          const alpha = node.active && connNode.active ? 0.3 : 0.1
          const gradient = ctx.createLinearGradient(node.x, node.y, connNode.x, connNode.y)

          if (isDark) {
            gradient.addColorStop(0, `rgba(0, 255, 255, ${alpha})`)
            gradient.addColorStop(0.5, `rgba(255, 0, 255, ${alpha * 0.5})`)
            gradient.addColorStop(1, `rgba(0, 255, 0, ${alpha})`)
          } else {
            gradient.addColorStop(0, `rgba(0, 150, 150, ${alpha})`)
            gradient.addColorStop(1, `rgba(150, 0, 150, ${alpha})`)
          }

          ctx.beginPath()
          ctx.moveTo(node.x, node.y)
          ctx.lineTo(connNode.x, connNode.y)
          ctx.strokeStyle = gradient
          ctx.lineWidth = node.active && connNode.active ? 1.5 : 0.5
          ctx.stroke()
        })

        // Draw nodes
        if (node.active) {
          const pulseSize = 2 + Math.sin(node.pulse) * 1
          const glowSize = 8 + Math.sin(time + index * 0.1) * 3

          // Glow effect
          const glowGradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, glowSize)

          if (isDark) {
            glowGradient.addColorStop(0, "rgba(0, 255, 255, 0.8)")
            glowGradient.addColorStop(0.5, "rgba(255, 0, 255, 0.4)")
            glowGradient.addColorStop(1, "rgba(0, 255, 255, 0)")
          } else {
            glowGradient.addColorStop(0, "rgba(0, 150, 150, 0.6)")
            glowGradient.addColorStop(1, "rgba(0, 150, 150, 0)")
          }

          ctx.beginPath()
          ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2)
          ctx.fillStyle = glowGradient
          ctx.fill()

          // Core node
          ctx.beginPath()
          ctx.arc(node.x, node.y, pulseSize, 0, Math.PI * 2)
          ctx.fillStyle = isDark ? "#00ffff" : "#009999"
          ctx.fill()
        } else {
          // Inactive node
          ctx.beginPath()
          ctx.arc(node.x, node.y, 1, 0, Math.PI * 2)
          ctx.fillStyle = isDark ? "rgba(0, 255, 255, 0.2)" : "rgba(0, 150, 150, 0.3)"
          ctx.fill()
        }
      })

      // Add scanning line effect
      const scanY = ((time * 100) % (canvas.height + 200)) - 100
      const scanGradient = ctx.createLinearGradient(0, scanY - 50, 0, scanY + 50)
      scanGradient.addColorStop(0, "rgba(0, 255, 255, 0)")
      scanGradient.addColorStop(0.5, "rgba(0, 255, 255, 0.3)")
      scanGradient.addColorStop(1, "rgba(0, 255, 255, 0)")

      ctx.fillStyle = scanGradient
      ctx.fillRect(0, scanY - 50, canvas.width, 100)

      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    createGrid()
    animate()

    const handleResize = () => {
      resizeCanvas()
      createGrid()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-40" />
}
