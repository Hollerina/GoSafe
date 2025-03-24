import { useState, useEffect } from 'react'
import './App.css'
import { TextMe } from './components/TextMe'
import { CallMe } from './components/CallMe'
import { EmergencyContact } from './components/EmergencyContact'
import { EnterLocation } from './components/EnterLocation'
import { LightDarkMode } from './components/LightDarkMode'
import Navbar from './components/navbar'

function App() {
  const [location, setLocation] = useState('')
  const [valid, setValid] = useState(true)
  const [phoneNumber, setNumber] = useState('')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = '#333'
      document.body.style.color = '#fff'
    } else {
      document.body.style.backgroundColor = '#fff'
      document.body.style.color = '#000'
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleTextClick = () => {
    if (phoneNumber.length < 11) {
      setValid(false)
      return
    }
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const message = `Hi, this is Emma. Just letting you know that I am checking in at ${
          location || "unknown location"
        }. My current geolocation is: https://www.google.com/maps?q=${
          position.coords.latitude
        },${position.coords.longitude}`

        window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
          message
        )}`
      })
    } else {
      const message = `Hi, this is Emma. Just letting you know that I am checking in at ${
        location || "unknown location"
      }`        
      window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
      message
    )}`
      
    }
  }

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`
  }

  return (
    <>
      <div
        style={{
          backgroundColor: darkMode ? '#333' : '#fff',
          color: darkMode ? '#fff' : '#000',
          transition: 'background-color 0.3s, color 0.3s',
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: '20px',
            position: 'fixed',
            top: 0,
            left: 0,
            width: 'calc(100% - 30px)',
            backgroundColor: darkMode ? '#444' : '#f5f5f5',
            padding: '15px',
            margin: 0,
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            zIndex: 1000, 
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            <h1>Go Safe</h1>
          </div>
          <LightDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        </div>
        <div
          className='card'
          style={{
            backgroundColor: darkMode ? '#444' : '#f5f5f5',
            borderRadius: '8px',
            boxShadow: darkMode
              ? '0 4px 6px rgba(0,0,0,0.3)'
              : '0 2px 4px rgba(0,0,0,0.1)',
            marginTop: '80px',
            transition: 'background-color 0.3s, box-shadow 0.3s',
          }}
        >
          <div style={{ marginBottom: '20px', marginTop: '20px' }}>
            <EmergencyContact
              phoneNumber={phoneNumber}
              setValid={setValid}
              setNumber={setNumber}
              valid={valid}
              darkMode={darkMode}
            />
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <CallMe darkMode={darkMode} handleCallClick={handleCallClick} />
          </div>

          <div style={{ marginBottom: '20px', marginTop: '20px' }}>
            <EnterLocation
              location={location}
              setLocation={setLocation}
              darkMode={darkMode}
            />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <TextMe darkMode={darkMode} handleTextClick={handleTextClick} />
          </div>
        </div>
      </div>

      <nav
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
          zIndex: 1000,
        }}
      >
        <Navbar />
      </nav>
    </>
  )
}

export default App
