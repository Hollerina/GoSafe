// @ts-expect-error cant be bothered with types
export const CallMe = ({ handleCallClick, darkMode }) => {
  return (
    <button
      onClick={handleCallClick}
      style={{
        width: '160px', // Set the size (adjust as needed)
        height: '160px', // Same as width to make a perfect circle
        borderRadius: '50%', // This makes it circular
        backgroundColor: darkMode ? '#950b0b' : '#b71111',
        color: 'white', // White text
        border: 'none', // Remove default border
        fontSize: '50px', // Text size
        fontWeight: 'bold', // Bold text
        cursor: 'pointer', // Hand cursor on hover
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        transition: 'transform 0.2s, box-shadow 0.2s', // Smooth hover effect
      }}
    >
      Alert
    </button>
  )
}
