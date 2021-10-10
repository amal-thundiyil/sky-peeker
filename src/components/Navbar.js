import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container flex-container">
          <Link to="/">
            <img
              src="https://thumbs.dreamstime.com/b/weather-forecast-icon-seasons-clouds-label-cloudy-weather-forecast-white-background-seasons-clouds-logo-weather-forecast-icon-126451197.jpg"
              width="100px"
              alt="weather-app logo"
              className="logo"
            />
          </Link>
          <ul className="nav-links">
            <li className="nav-link">
              <Link to="/">Home</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
