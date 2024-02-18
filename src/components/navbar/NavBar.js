import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
    const navigate = useNavigate()

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/">Home</Link>
      </li>
      <li className="navbar-item">
        <Link to="/workouts">Workouts</Link>
      </li>
      <li className="navbar-item">
        <Link to="/athletes">Athletes</Link>
      </li>
      <li className="navbar-item">
        <Link to="/boats">Boats</Link>
      </li>
      <li className="navbar-item">
        <Link to="/coaches">Coaches</Link>
      </li>
      {localStorage.getItem("row_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
            className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("row_user");
              navigate("/", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
