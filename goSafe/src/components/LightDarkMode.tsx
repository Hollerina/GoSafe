//@ts-expect-error cant be bothered with types
export const LightDarkMode = ({toggleDarkMode, darkMode}) => {
    return (
        <button
        onClick={toggleDarkMode}
        style={{
          backgroundColor: darkMode ? "#555" : "#eee",
          color: darkMode ? "#fff" : "#000",
          border: "none",
          padding: "8px 12px",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
      >
        {darkMode ? "☀️" : "🌙"}
      </button>
    )
}