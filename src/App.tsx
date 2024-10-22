import { useEffect, useState } from "react"

function App() {
  const [pos, setPos] = useState<{ x: number, y: number }>({ x: 0, y: 0 })
  const [mouseDown, setMouseDown] = useState<boolean>(false)
  useEffect(() => {
    window.onmousedown = e => {
      console.log(e.clientX, e.clientY)
      setPos({ x: e.clientX, y: e.clientY })
      setMouseDown(true)
    }
    window.onmousemove = e => {
      setPos({
        x: e.clientX,
        y: e.clientY
      })
    }
    window.onmouseup = e => {
      setMouseDown(false)
    }
  }, [])
  return (
    <div>
      x: {pos.x}  y:{pos.y}
    </div>
  )
}

export default App
