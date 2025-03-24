import { useState } from "react"; // Importa il hook useState da React
import axios from "axios"; // Importa la libreria axios per fare richieste HTTP
import reactLogo from "./assets/react.svg"; // Importa il logo di React
import viteLogo from "/vite.svg"; // Importa il logo di Vite
import "./App.css"; // Importa il file CSS per gli stili

function App() {
  const [location, setLocation] = useState(""); // Stato per memorizzare la posizione inserita dall'utente
  const [latitude, setLatitude] = useState(null); // Stato per memorizzare la latitudine
  const [longitude, setLongitude] = useState(null); // Stato per memorizzare la longitudine

  const phoneNumber = "07585771948"; // Numero di telefono a cui inviare il messaggio

  const handleTextClick = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      console.log("Latitude:", coords.latitude);
      console.log("Longitude:", coords.longitude);
      console.log("Altitude:", coords.altitude);
      console.log("Accuracy:", coords.accuracy);
      console.log("Altitude Accuracy:", coords.altitudeAccuracy);
      console.log("Heading:", coords.heading);
      console.log("Speed:", coords.speed);
    });

    if (navigator.geolocation) {
      // Controlla se il browser supporta la geolocalizzazione
      navigator.geolocation.getCurrentPosition(async (position) => {
        // Ottiene la posizione corrente dell'utente
        setLatitude(position.coords.latitude); // Imposta la latitudine nello stato
        setLongitude(position.coords.longitude); // Imposta la longitudine nello stato

        // Crea il messaggio con la posizione corrente
        const message = `Hi, this is Holly. Just letting you know that I am checking in at ${
          location || "unknown location"
        }. My current location is: https://www.google.com/maps?q=${
          position.coords.latitude
        },${position.coords.longitude}`;

        // * Credenziali Twilio (da sostituire con le tue credenziali)
        const accountSid = "your_account_sid";
        const authToken = "your_auth_token";
        const twilioPhoneNumber = "your_twilio_phone_number";

        // * URL dell'API di Twilio per inviare il messaggio
        const url = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

        // * Parametri della richiesta
        const data = new URLSearchParams({
          To: phoneNumber,
          From: twilioPhoneNumber,
          Body: message,
        });

        // * Codifica delle credenziali in base64
        const auth = btoa(`${accountSid}:${authToken}`);

        try {
          // Invia la richiesta POST all'API di Twilio
          const response = await axios.post(url, data, {
            headers: {
              Authorization: `Basic ${auth}`, // Aggiunge l'header di autorizzazione
              "Content-Type": "application/x-www-form-urlencoded", // Specifica il tipo di contenuto
            },
          });

          if (response.status === 201) {
            // Controlla se la risposta è stata positiva
            console.log("Message sent"); // Logga un messaggio di successo
          } else {
            console.error("Failed to send message"); // Logga un messaggio di errore
          }
        } catch (error) {
          console.error("Error:", error); // Logga eventuali errori
        }
      });
    } else {
      console.error("Geolocation is not supported by this browser."); // Logga un messaggio se la geolocalizzazione non è supportata
    }
  };

  const handleCallClick = () => {
    window.location.href = `tel:${phoneNumber}`; // Apre l'app di chiamata con il numero di telefono
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />{" "}
          {/* Logo di Vite */}
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />{" "}
          {/* Logo di React */}
        </a>
      </div>
      <h1>Vite + React</h1>
      {/* //!  latitude  */}
      <h3>Yor latitude and longitude</h3>
      <p>{latitude}</p>
      <p>{longitude}</p>

      <div className="card">
        <div style={{ marginBottom: "20px", marginTop: "20px" }}>
          <label
            htmlFor="location"
            style={{ display: "block", marginBottom: "8px" }}
          >
            Enter your location:
          </label>
          <input
            id="location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)} // Aggiorna lo stato della posizione quando l'utente digita
            placeholder="Enter your location"
            style={{
              padding: "8px",
              width: "100%",
              marginBottom: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={handleTextClick}>TEXT ME</button>{" "}
          {/* Bottone per inviare il messaggio */}
          <button onClick={handleCallClick}>CALL ME</button>{" "}
          {/* Bottone per effettuare la chiamata */}
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
