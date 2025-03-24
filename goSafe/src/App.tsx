import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'

function App() {
  const [location, setLocation] = useState('')
  const [valid, setValid] = useState(true)

  const [phoneNumber, setNumber] = useState('')

  const handleTextClick = () => {
    if (phoneNumber.length < 11) {
      setValid(false)
      return
    }

    const message = `Hi, this is Holly. Just letting you know that I am checking in at ${
      location || 'unknown location'
    }`

    window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
      message
    )}`
  }

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`
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
        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
          <label
            htmlFor='contact'
            style={{ display: 'block', marginBottom: '8px' }}
          >
            Enter your emergency contact:
          </label>
          <input
            id='contact'
            type='text'
            maxLength={11}
            pattern='[0-9]*'
            inputMode='numeric'
            onKeyDown={(e) => {
              if (
                e.key === 'Backspace' ||
                e.key === 'Delete' ||
                e.key === 'Tab' ||
                e.key === 'Escape' ||
                e.key === 'Enter' ||
                e.key.includes('Arrow') ||
                (e.ctrlKey && ['a', 'c', 'v', 'x'].includes(e.key))
              ) {
                return
              }

              if (!/[0-9]/.test(e.key)) {
                e.preventDefault()
              }
            }}
            value={phoneNumber}
            onChange={(e) => {
              setValid(true)
              setNumber(e.target.value)
            }}
            placeholder='e.g 07987654321'
            style={{
              padding: '8px',
              width: '100%',
              marginBottom: '10px',
              borderRadius: '4px',
              border: valid ? '1px solid #ccc' : '1px solid red',
            }}
          />
        </div>
        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
          <label
            htmlFor='location'
            style={{ display: 'block', marginBottom: '8px' }}
          >
            Enter your location:
          </label>
          <input
            id='location'
            type='text'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder='Enter your location'
            style={{
              padding: '8px',
              width: '100%',
              marginBottom: '10px',
              borderRadius: '4px',
              border: '1px solid #ccc',
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button onClick={handleTextClick}>TEXT ME</button>
          <button onClick={handleCallClick}>CALL ME</button>
        </div>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <div>
        <Navbar />
      </div>
    </>
  )
}

export default App
