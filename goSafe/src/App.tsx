import { useState, useEffect } from "react";
import "./App.css";
import { TextMe } from "./components/TextMe";
import { CallMe } from "./components/CallMe";
import { EmergencyContact } from "./components/EmergencyContact";
import { EnterLocation } from "./components/EnterLocation";
import { LightDarkMode } from "./components/LightDarkMode";
import Navbar from "./components/navbar";

function App() {
  const [location, setLocation] = useState("");
  const [valid, setValid] = useState(true);
  const [phoneNumber, setNumber] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Apply theme changes when darkMode state changes
  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#333";
      document.body.style.color = "#fff";
    } else {
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleTextClick = () => {
    if (phoneNumber.length < 11) {
      setValid(false);
      return;
    }

    const message = `Hi, this is Holly. Just letting you know that I am checking in at ${
      location || "unknown location"
    }`;

    window.location.href = `sms:${phoneNumber}?body=${encodeURIComponent(
      message
    )}`;
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div
      style={{
        backgroundColor: darkMode ? "#333" : "#fff",
        color: darkMode ? "#fff" : "#000",
        minHeight: "100vh",
        padding: "20px",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Go Safe</h1>
        <LightDarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </div>
      <div
        className="card"
        style={{
          backgroundColor: darkMode ? "#444" : "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: darkMode
            ? "0 4px 6px rgba(0,0,0,0.3)"
            : "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
          <EmergencyContact
            phoneNumber={phoneNumber}
            setValid={setValid}
            setNumber={setNumber}
            valid={valid}
            darkMode={darkMode}
          />
        </div>
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
        <EnterLocation location={location} setLocation={setLocation} darkMode={darkMode}/> 
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <TextMe darkMode={darkMode} handleTextClick={handleTextClick} />
          <CallMe darkMode={darkMode} handleCallClick={handleCallClick} />
        </div>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
