import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import { useState } from "react";
function App() {

  let [state, setState] = useState(0)
  let [value, setValue] = useState(1)


  const like = () => {

    if (state < 10) {
      let x = state+ +value
      setState(x)
    } else if (state > 10) {
      setState(state)
    }
  }

  const dislike = () => {
      if(state<=0){
        setState(0)
      }else if(state>0){
        setState(state - value)
      }
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
              <div className="col-md-12 d-flex justify-content-center mt-5">
                 <h1>Enter the amount for Increment or Decrement</h1>
              </div>
              <div className="col-md-12 d-flex justify-content-center mt-5">
                 <input type="number" className="form-control bg-success-subtle w-25" placeholder="Type Here" value={value} onChange={(e)=>{setValue(e.target.value)}} />
              </div>
         </div>

        <div className="row">
          <div className="d-flex justify-content-evenly mt-5">
            <button onClick={like} type="button" className="btn btn-danger"><img src="thumb-up.png" className="me-1"/>Like</button>
            <button onClick={dislike} type="button" className="btn btn-success"><img src="thumb-down.png" className="me-1"/>DisLike</button>
            <button onClick={reset} className="btn btn-primary"><img src="undo.png" className="me-1"/>Reset</button>
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