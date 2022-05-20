import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function Aboutpage() {
  return (
    <>
      <h1>About</h1>
      <Card>
        <div className="about">
          <h1>This is the project</h1>
          <p>This is a react app to leave feedback for a product or service</p>
          <p>Version: 1.0.0</p>
          <p>
            <Link to="/">Back to homes </Link>
          </p>
        </div>
      </Card>
    </>
  );
}

export default Aboutpage;
