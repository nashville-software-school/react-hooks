import { useState, useEffect } from 'react'
// TODO: Import useRef from 'react'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  
  // TODO: Create refs for:
  // 1. video element (videoRef)
  // 2. interval timer (intervalRef)

  // TODO: Update this effect to use refs
  useEffect(() => {
    let interval
    if (isPlaying) {
      interval = setInterval(() => {
        // Currently can't access video element
        // Need to use ref to get currentTime
        setCurrentTime(0)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isPlaying])

  const handlePlayPause = () => {
    // TODO: Use videoRef to play/pause the video
    setIsPlaying(!isPlaying)
  }

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime)
  }

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value)
    // TODO: Use videoRef to set video currentTime
    setCurrentTime(time)
  }

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Video Player with useRef</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <video
          // TODO: Add ref attribute
          width="100%"
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
        >
          <source 
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" 
            type="video/mp4" 
          />
          Your browser does not support the video tag.
        </video>
      </div>

      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '10px',
        marginBottom: '20px'
      }}>
        <button
          onClick={handlePlayPause}
          style={{ padding: '8px 16px' }}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        
        <input
          type="range"
          min="0"
          max={0} // TODO: Use videoRef to get duration
          value={currentTime}
          onChange={handleSeek}
          style={{ flex: 1 }}
        />
        
        <span>
          {formatTime(currentTime)} / {formatTime(0)} {/* TODO: Use videoRef to get duration */}
        </span>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Tasks to complete:</h3>
        <ul>
          <li>Create videoRef to access the video element</li>
          <li>Create intervalRef to store the timer ID</li>
          <li>Implement play/pause functionality using the video ref</li>
          <li>Update the time display using the video duration</li>
          <li>Implement seeking using the video ref</li>
        </ul>
      </div>
    </div>
  )
}

export default App