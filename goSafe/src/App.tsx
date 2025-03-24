import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [location, setLocation] = useState('')

  const phoneNumber = '07585771948'

  const handleClick = () => {
    const message = `Hi, this is Holly. Just letting you know that I am checking in at ${location || 'unknown location'}`
    
    window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
      message
    )}`
  }

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        
        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
          <label htmlFor="location" style={{ display: 'block', marginBottom: '8px' }}>
            Enter your location:
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter your location"
            style={{ 
              padding: '8px', 
              width: '100%', 
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
          />
        </div>
        
        <button onClick={handleClick}>TEXT ME</button>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
