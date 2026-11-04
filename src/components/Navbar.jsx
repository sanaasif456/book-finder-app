import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/reading-list">My Reading List</Link>
      </div>

      <h2>Book Finder</h2>
    </nav>
  );
}

export default Navbar;