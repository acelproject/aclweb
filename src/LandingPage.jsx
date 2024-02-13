import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <div>
        <div>
          <Link to={`/`}>Home</Link>
        </div>
        <div>
          <Link to={`/tabs`}>Tabs</Link>
        </div>
        <div>
          <Link to={`/valentine`}>Valentine</Link>
        </div>
      </div>
    </div>
  );
}
