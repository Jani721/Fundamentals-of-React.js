import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h1>Welcome to My Website!</h1>
      <p>Welcome to my React multi-page application.</p>

      <Link to="/contact" className="get-started">
        Get Started
      </Link>
    </div>
  );
}

export default Home;
