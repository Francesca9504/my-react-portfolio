import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{
        padding: "1rem 2rem",
        backgroundColor: "#ffdac6",
        display: "flex",
        justifyContent: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <ul
        style={{
          display: "flex",
          gap: "4rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to="/"
            style={{
              color: "#f85e00",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            style={{
              color: "#f85e00",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            style={{
              color: "#f85e00",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            style={{
              color: "#f85e00",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
