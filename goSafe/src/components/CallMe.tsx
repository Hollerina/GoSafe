// @ts-expect-error cant be bothered with types
export const CallMe = ({ handleCallClick, darkMode }) => {
  return (
    <button
      onClick={handleCallClick}
      style={{
        backgroundColor: darkMode ? "#198754" : "#28a745",
        color: "#fff",
        border: "none",
        padding: "10px 15px",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Alert
    </button>
  );
};
