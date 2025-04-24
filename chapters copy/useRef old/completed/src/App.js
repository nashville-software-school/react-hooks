import { useRef, useState, useEffect } from 'react'

function App() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const videoRef = useRef(null)
  const intervalRef = useRef(null)

  // Effect to handle video time updates
  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setCurrentTime(videoRef.current?.currentTime || 0)
      }, 1000)
    } else {
      clearInterval(intervalRef.current)
    }

    // Cleanup interval on unmount or when isPlaying changes
    return () => clearInterval(intervalRef.current)
  }, [isPlaying])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleTimeUpdate = (e) => {
    setCurrentTime(e.target.currentTime)
  }

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value)
    if (videoRef.current) {
      videoRef.current.currentTime = time
      setCurrentTime(time)
    }
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
          ref={videoRef}
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
          max={videoRef.current?.duration || 0}
          value={currentTime}
          onChange={handleSeek}
          style={{ flex: 1 }}
        />
        
        <span>
          {formatTime(currentTime)} / {formatTime(videoRef.current?.duration || 0)}
        </span>
      </div>

      <div style={{ marginTop: '20px' }}>
        <h3>Understanding useRef in this example:</h3>
        <ul>
          <li>videoRef: Maintains a reference to the video element across renders</li>
          <li>intervalRef: Stores the interval ID for cleanup</li>
          <li>Both refs persist between renders without causing re-renders</li>
          <li>Refs provide direct DOM access for imperative actions</li>
        </ul>
      </div>
    </div>
  )
}

export default App