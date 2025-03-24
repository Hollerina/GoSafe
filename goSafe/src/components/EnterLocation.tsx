//@ts-expect-error cant be bothered with types
export const EnterLocation = ({location, setLocation, darkMode}) => {
  return (
    <>
      {" "}
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
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Enter your location"
        style={{
          padding: "8px",
          width: "100%",
          marginBottom: "10px",
          borderRadius: "4px",
          border: "1px solid #ccc",
          backgroundColor: darkMode ? "#555" : "#fff",
          color: darkMode ? "#fff" : "#000",
        }}
      />
    </>
  );
};
