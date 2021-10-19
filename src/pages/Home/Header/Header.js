import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const{user, logOut} = useAuth()
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container">
    <Link className="navbar-brand"  to="/home#home">Health Solution</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about#about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/services#services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/shop">Shop</Link>
        </li>
        <li className="nav-item ">
          <a className="nav-link active" href="/appointment">Appointment</a>
        </li>
      </ul>
          <div className="d-flex align-items-center">
            {
              user.email ?
                <button className="btn btn-success mx-3" onClick={logOut}>LogOut</button>:
              <Link to="/login" className="btn btn-danger mx-3">Login</Link>
            }
                <span className="text-white text-bold">Signin as:{user.displayName}</span>
        </div>
      
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;