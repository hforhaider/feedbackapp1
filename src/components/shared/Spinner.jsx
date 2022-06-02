import spinnner from "../assets/spinnner.gif";

function Spinner() {
  return (
    <img
      src={spinnner}
      alt="loading..."
      style={{ width: "100px", margin: "auto", display: "block" }}
    />
  );
}

export default Spinner;
