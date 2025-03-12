import React from "react";
const Navbar = (props) => {
  return (
    <div className="navbar1 w-75 m-auto">
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="item mx-70">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Service</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Contact
              </a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default Navbar;
