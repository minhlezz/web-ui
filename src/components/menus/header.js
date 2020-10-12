import React, { Component } from 'react';
import './../../styles/styles.css'
class Header extends Component {
  render() {
    return (
      <header>

        <nav className="navbar navbar-expand-lg   navbar navbar-dark bg-dark  ">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <a className="navbar-brand" href="/">Home</a>
            </ul>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">
              <span>Login</span>
            </button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@amdo">
              <span>Register</span>
            </button>

          </div>
        </nav>

      </header>
    );
  }
}

export default Header;
