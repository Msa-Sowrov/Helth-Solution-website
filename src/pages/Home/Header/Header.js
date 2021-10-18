import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <a className="navbar-brand" href="/home#home">Health Solution</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#services">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#timing">Timing</a>
        </li>
      </ul>
          <div className="d-flex ">
              <Link to="/login" className="btn btn-danger mx-3">Login</Link>
                <span>Signin as:</span>
        </div>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;