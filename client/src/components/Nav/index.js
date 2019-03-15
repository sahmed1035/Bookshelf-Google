import React from "react";
import "./style.css";

/**adding a conditional active class that is only applied if the path name matches. */
function Nav() {
  return (
    <nav className="navbar navbar-default">
      <a className="navbar-brand" href="/">
        BOOKSHELF
      </a>
      <a className="navbar-header nav-item" href="/">
        SEARCH
      </a>
      <a className="navbar-header nav-item" href="/saved">
        SAVED
      </a>
    </nav>
  );
}

export default Nav;
