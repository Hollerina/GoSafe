import Navbar from "./components/navbar"

export const Community = () => {

  return (
    <>
      <h1>Community</h1>
      <div>
        <button style={{ backgroundColor: '#ff33ff' }}>Walk me Home</button><br /><br /><br />
        <button style={{ backgroundColor: '#ff33ff' }}>Talk me Home</button>
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
