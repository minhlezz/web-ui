import React, { Component } from 'react';
import './../../styles/styles.css'

class Filters extends Component {
  render() {
    return (
      <div className="container">
        <nav class="navbar navbar-light bg-light justify-content-between">
          <div className="container-fluid mt-15">
            <div className="row">
              <h3>Choose to live with like-minded people</h3>
            </div>
          </div>
          <div className="container-fluid mt-15">
            <div className="row">
              <ul className="navbar-nav mr-auto">
                <form class="form-inline">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success my-2 my-sm-0 mr-5" type="submit">Search</button>
                  <li>
                    <button type="button" class="btn btn-outline-secondary  button-filter" >
                      <span>Location</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn btn-outline-secondary  button-filter" >
                      <span>Price</span>
                    </button>
                  </li>
                  <li>
                    <button type="button" class="btn btn-outline-secondary button-filter" >
                      <span>Date</span>
                    </button>
                  </li>
                  <li>
                    <div class="dropdown">
                      <button type="button" class="btn btn-outline-secondary  dropdown-toggle button-filter"
                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>More Filters</span>
                      </button>
                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                      </div>
                    </div>
                  </li>
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Filters;
