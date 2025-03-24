// @ts-expect-error cant be bothered with types
export const TextMe = ({ handleTextClick, darkMode }) => {
  return (
    <button
      onClick={handleTextClick}
      style={{
        width: '80%', // Make it wide but not full width
        padding: '16px 24px', // Vertical and horizontal padding
        backgroundColor: darkMode ? '#0cc021' : '#0c8420',
        color: 'white', // White text
        fontSize: '18px', // Larger text
        fontWeight: 'bold', // Bold text
        border: 'none', // Remove default border
        borderRadius: '8px', // Slightly rounded corners
        cursor: 'pointer', // Hand cursor on hover
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Add shadow for depth
        transition: 'all 0.3s ease', // Smooth transition for hover effects
        display: 'block', // Block display
        margin: '20px auto', // Center the button with margin
        textTransform: 'uppercase', // Optional: uppercase text
        letterSpacing: '1px', // Optional: spacing between letters
      }}
    >
      Check in
    </button>
  )
}
