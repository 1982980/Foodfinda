import logo from "../../images/finder-logo.png";

import "./heder.css";

function Header() {
  return (
    <div className="header">
      <div className="logo_header">
        <a href="https://google.com" className="logo">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <nav className="menu_header">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Restaurants</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
