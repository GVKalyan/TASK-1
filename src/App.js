import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { useState } from "react";
function App() {

  const [state, setState] = useState(0)

  const like = () => {

    if (state < 10) {
      setState(state + 1)
    } else if (state > 10) {
      setState(state)
    }

  }

  const dislike = () => {
    setState(state - 1)
  }

  const reset = () => {
    setState(0)
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div id="carouselExampleIndicators" className="carousel slide">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="innom2.webp" className="d-block w-100" alt="INNOMATIC RESEARCH LAB"/>
              </div>
              <div className="carousel-item">
                <img src="innom1.webp" className="d-block w-100" alt="INNOMATIC RESEARCH LAB"/>
              </div>
              
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="row">
          <div className="d-flex justify-content-evenly mt-5">
            <button onClick={like} type="button" className="btn btn-danger">like</button>
            <button onClick={dislike} type="button" className="btn btn-success">Dislike</button>
            <button onClick={reset} className="btn btn-primary">reset</button>
          </div>
        </div>
        <div className="row mt-4">
          <div className="d-flex justify-content-center">
            <h3 className="border border-danger rounded-4 border border-5">{state} Like</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App; 