import Navbar from "./components/navbar"

export const Community = () => {
  return (
    <>
      <div>Community</div>
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
