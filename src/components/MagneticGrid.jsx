import { useState } from "react"

const GRID = 20
const SIZE = 20

function MagneticGrid() {
    const [mouse, setMouse] = useState({ x: 0, y: 0 })

    function handleMouseMove(e) {
        const rect = e.currentTarget.getBoundingClientRect()
        setMouse({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
        })
    }

    return (
        <div
            onMouseMove={handleMouseMove}
            style={{
                width: 400,
                height: 400,
                background: "#0b0b0b",
                display: "grid",
                gridTemplateColumns: `repeat(${GRID}, 1fr)`,
                borderRadius: 12
            }}
        >
            {Array.from({ length: GRID * GRID }).map((_, i) => {
                const x = (i % GRID) * SIZE + SIZE / 2
                const y = Math.floor(i / GRID) * SIZE + SIZE / 2

                const angle =
                    Math.atan2(mouse.y - y, mouse.x - x) * (180 / Math.PI)

                return (
                    <div
                        key={i}
                        style={{
                            width: 2,
                            height: 12,
                            background: "white",
                            margin: "auto",
                            transform: `rotate(${angle}deg)`
                        }}
                    />
                )
            })}
        </div>
    )
}

export default MagneticGrid
