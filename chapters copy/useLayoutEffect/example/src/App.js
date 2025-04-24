import { useState, useEffect, useRef } from 'react'
// TODO: Import useLayoutEffect from 'react'

function Tooltip({ text, children }) {
  const [tooltipStyle, setTooltipStyle] = useState({})
  const tooltipRef = useRef(null)
  const containerRef = useRef(null)

  // TODO: Convert this to useLayoutEffect to prevent flickering
  useEffect(() => {
    if (tooltipRef.current && containerRef.current) {
      const tooltip = tooltipRef.current
      const container = containerRef.current
      const containerRect = container.getBoundingClientRect()
      const tooltipRect = tooltip.getBoundingClientRect()

      // Calculate position to ensure tooltip is always visible
      let top = containerRect.top - tooltipRect.height - 10
      let left = containerRect.left + (containerRect.width - tooltipRect.width) / 2

      // Adjust if tooltip would go off screen
      if (top < 0) {
        top = containerRect.bottom + 10
      }
      if (left < 0) {
        left = 0
      } else if (left + tooltipRect.width > window.innerWidth) {
        left = window.innerWidth - tooltipRect.width
      }

      // Notice the flickering when using useEffect
      // This happens because the tooltip is positioned after the browser paint
      setTooltipStyle({
        position: 'fixed',
        top: `${top}px`,
        left: `${left}px`,
        opacity: 1
      })
    }
  }, [text])

  return (
    <div style={{ display: 'inline-block' }} ref={containerRef}>
      {children}
      <div
        ref={tooltipRef}
        style={{
          position: 'fixed',
          backgroundColor: 'black',
          color: 'white',
          padding: '8px',
          borderRadius: '4px',
          fontSize: '14px',
          opacity: 0,
          transition: 'opacity 0.2s',
          ...tooltipStyle
        }}
      >
        {text}
      </div>
    </div>
  )
}

function App() {
  const [showTooltips, setShowTooltips] = useState(true)
  const [position, setPosition] = useState(0)

  const moveButtons = () => {
    setPosition(prev => (prev + 100) % 300)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>useLayoutEffect Tooltip Demo</h1>

      <div style={{ marginBottom: '20px' }}>
        <label>
          <input
            type="checkbox"
            checked={showTooltips}
            onChange={e => setShowTooltips(e.target.checked)}
          />
          Show Tooltips
        </label>
      </div>

      <button onClick={moveButtons}>
        Move Buttons
      </button>

      <div style={{ 
        marginTop: '20px',
        position: 'relative',
        left: `${position}px`,
        transition: 'left 0.3s'
      }}>
        {showTooltips ? (
          <>
            <Tooltip text="This is button one">
              <button style={{ marginRight: '10px' }}>
                Button 1
              </button>
            </Tooltip>

            <Tooltip text="This is button two">
              <button style={{ marginRight: '10px' }}>
                Button 2
              </button>
            </Tooltip>

            <Tooltip text="This is button three">
              <button>
                Button 3
              </button>
            </Tooltip>
          </>
        ) : (
          <>
            <button style={{ marginRight: '10px' }}>Button 1</button>
            <button style={{ marginRight: '10px' }}>Button 2</button>
            <button>Button 3</button>
          </>
        )}
      </div>

      <div style={{ marginTop: '40px' }}>
        <h3>Tasks to complete:</h3>
        <ul>
          <li>Import useLayoutEffect</li>
          <li>Replace useEffect with useLayoutEffect in Tooltip component</li>
          <li>Observe how this eliminates the flickering</li>
          <li>Understand why synchronous DOM measurement is important here</li>
        </ul>
      </div>
    </div>
  )
}

export default App
