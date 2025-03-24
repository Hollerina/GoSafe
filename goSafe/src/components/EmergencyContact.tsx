//@ts-expect-error cant be bothered typing
export const EmergencyContact = ({phoneNumber, setValid, setNumber, valid, darkMode}) => {
    return (
        <>
        <label
        htmlFor="contact"
        style={{ display: "block", marginBottom: "8px" }}
      >
        Enter your emergency contact:
      </label>
      <input
        id="contact"
        type="text"
        maxLength={11}
        pattern="[0-9]*"
        inputMode="numeric"
        onKeyDown={(e) => {
          if (
            e.key === "Backspace" ||
            e.key === "Delete" ||
            e.key === "Tab" ||
            e.key === "Escape" ||
            e.key === "Enter" ||
            e.key.includes("Arrow") ||
            (e.ctrlKey && ["a", "c", "v", "x"].includes(e.key))
          ) {
            return;
          }

          if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
          }
        }}
        value={phoneNumber}
        onChange={(e) => {
          setValid(true);
          setNumber(e.target.value);
        }}
        placeholder="e.g 07987654321"
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "10px",
          borderRadius: "4px",
          border: valid ? "1px solid #ccc" : "1px solid red",
          backgroundColor: darkMode ? "#555" : "#fff",
          color: darkMode ? "#fff" : "#000",
        }}
      />
      </>
    )
}