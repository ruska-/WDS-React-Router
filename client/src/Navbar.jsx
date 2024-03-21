import { Link } from "react-router-dom";
import "./styles.css"

export function Navbar() {
  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">My App</div>
        <ul className="nav-list">
          <li>
            <Link to="/pages/posts">Posts</Link>
          </li>
          <li>
            <Link to="/pages/users">Users</Link>
          </li>
          <li>
            <Link to="/pages/todos">Todos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
