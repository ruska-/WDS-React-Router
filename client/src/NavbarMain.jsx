import { Link } from "react-router-dom";
import "./styles.css"

export function NavbarMain() {
  return (
    <>
      <nav className="top-nav">
        <div className="nav-text-large">My App</div>
        <ul className="nav-list">
          <li>
            <Link to="posts.html">Posts</Link>
          </li>
          <li>
            <Link to="users.html">Users</Link>
          </li>
          <li>
            <Link to="todos.html">Todos</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
