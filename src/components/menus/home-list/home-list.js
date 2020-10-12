import React, { Component } from 'react';
import './../../../styles/styles.css'



class HomeList extends Component {
  render() {
    return (
      <div className="container mt-35">

        <div className="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="row">
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <h3 style={{ textAlign: "center" }}>Search Listing in .....</h3>
                </li>
              </ul>
            </div>
            <div className="row mt-15">
              <div class="row">
                <div class="col-sm-4">
                  <div class="card mr-5">
                    <img class="card-img-top" src="https://pix10.agoda.net/hotelImages/361/3613606/3613606_17120518570060221100.jpg?s=1024x768" alt="Card image 1" />
                    <div class="card-body">
                      <h5 class="card-title">Villa Home </h5>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="card mr-5">
                    <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxnX_PtEb6QNPtDRQggFTFHWNLKUY5NkaonQ&usqp=CAU" alt="Card image cap" />
                    <div class="card-body">
                      <h5 class="card-title"> House 2</h5>
                     
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="card mr-5">
                    <img class="card-img-top" src="https://upload.wikimedia.org/wikipedia/commons/9/99/Bigger_single-family_home.jpg" alt="Card image cap" />
                    <div class="card-body">
                      <h5 class="card-title"> House 3</h5>
                      
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeList;