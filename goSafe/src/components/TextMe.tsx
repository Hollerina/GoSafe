// @ts-expect-error cant be bothered with types
export const TextMe = ({handleTextClick, darkMode}) => {
    return (
    <button 
    onClick={handleTextClick}
    style={{
      backgroundColor: darkMode ? '#0066cc' : '#007bff',
      color: '#fff',
      border: 'none',
      padding: '10px 15px',
      borderRadius: '4px',
      cursor: 'pointer'
    }}
  >
    Check in
  </button>
    )
}