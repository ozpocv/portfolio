// SkillsOrbit.jsx
import { useEffect, useState } from 'react'
import './SkillsOrbit.css'

export function SkillsOrbit({ skills }) {
  const [angle, setAngle] = useState(0)

  // offsets pour chaque skill
  const [offsets, setOffsets] = useState(
    skills.map(() => ({ offsetX: 0, offsetY: 0 }))
  )
  const [draggingIndex, setDraggingIndex] = useState(null)
  const [dragStart, setDragStart] = useState(null)

  // animation de flottement en largeur
  useEffect(() => {
    let frameId
    const animate = () => {
      setAngle(a => a + 0.003)
      frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frameId)
  }, [])

  const radiusX = 380   // largeur
  const radiusY = 40    // petite ondulation verticale

  const handleMouseDown = (e, index) => {
    e.preventDefault()
    setDraggingIndex(index)
    setDragStart({ x: e.clientX, y: e.clientY })
  }

  const handleMouseUp = () => {
    setDraggingIndex(null)
    setDragStart(null)
  }

  const handleMouseMove = (e) => {
    if (draggingIndex === null || !dragStart) return

    const dx = e.clientX - dragStart.x
    const dy = e.clientY - dragStart.y

    setOffsets(prev =>
      prev.map((off, i) =>
        i === draggingIndex
          ? { offsetX: off.offsetX + dx, offsetY: off.offsetY + dy }
          : off
      )
    )

    setDragStart({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      className="skills-orbit-wrapper"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="skills-orbit">
        {skills.map((skill, i) => {
          const step = (2 * Math.PI * i) / skills.length
          const a = step + angle

          const baseX = radiusX * Math.cos(a)
          const baseY = radiusY * Math.sin(a)

          const { offsetX, offsetY } = offsets[i] ?? { offsetX: 0, offsetY: 0 }

          const x = baseX + offsetX
          const y = baseY + offsetY

          return (
            <div
              key={skill.name}
              className="orbit-item"
              style={{ transform: `translate(${x}px, ${y}px)` }}
              onMouseDown={(e) => handleMouseDown(e, i)}
            >
              <div className="orbit-icon-wrapper">
                <img src={skill.icon} alt={skill.name} className="orbit-icon" />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}