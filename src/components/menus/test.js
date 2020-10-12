import React, { Component } from 'react';
import './../../styles/styles.css'

class Test extends Component {
    render() {

        return (
            <div className="container-fluid mt-35">
                <div className="row">
                    <div class="col-xs-10 col-sm-10 col-md-10 col-lg-10">
                        <div className="row">
                            <h3>Choose to live with like-minded people</h3>
                        </div>
                        <div className="row">
                         <div>
                            <nav class="navbar navbar-light bg-light justify-content-between">
                                <ul className="navbar-nav mr-auto">
                                    <form class="form-inline">
                                        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button class="btn btn-outline-success my-2 my-sm-0 mr-15" type="submit">Search</button>
                                        <li>
                                            <button type="button" class="btn btn-outline-secondary btn-sm button-filter" >
                                                <span>Location</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-outline-secondary btn-sm button-filter" >
                                                <span>Price</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-outline-secondary btn-sm button-filter" >
                                                <span>Date</span>
                                            </button>
                                        </li>
                                        <li>
                                            <button type="button" class="btn btn-outline-secondary btn-sm button-filter" >
                                                <span>More Filters</span>
                                            </button>
                                        </li>
                                    </form>
                                </ul>
                            </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Test;
