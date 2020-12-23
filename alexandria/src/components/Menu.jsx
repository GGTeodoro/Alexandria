import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active test" aria-current="page" to="/">Home</Link>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle test" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                HTML
             </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/">Action</Link></li>
                <li><Link class="dropdown-item" to="/css">Another action</Link></li>
                <li><Link class="dropdown-item" to="/bootstrap">Something else here</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                CSS
             </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/">Action</Link></li>
                <li><Link class="dropdown-item" to="/css">Another action</Link></li>
                <li><Link class="dropdown-item" to="/bootstrap">Something else here</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Bootstrap
             </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/">Action</Link></li>
                <li><Link class="dropdown-item" to="/css">Another action</Link></li>
                <li><Link class="dropdown-item" to="/bootstrap">Something else here</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Javascript
             </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/">Action</Link></li>
                <li><Link class="dropdown-item" to="/css">Another action</Link></li>
                <li><Link class="dropdown-item" to="/bootstrap">Something else here</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                jQuery
             </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/">Action</Link></li>
                <li><Link class="dropdown-item" to="/css">Another action</Link></li>
                <li><Link class="dropdown-item" to="/bootstrap">Something else here</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <Link class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                WebStorage
             </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link class="dropdown-item" to="/">Action</Link></li>
                <li><Link class="dropdown-item" to="/css">Another action</Link></li>
                <li><Link class="dropdown-item" to="/bootstrap">Something else here</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu;
