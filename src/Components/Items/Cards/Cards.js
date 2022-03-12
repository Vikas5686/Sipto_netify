import React from 'react'
import './Cards.css'
export default function Cards(props) {
  return (
    <>
      <div className="col-md-6 col-lg-4">
        <div className="card h-100" style={{ "width": "18rem" }}>
          <img src={props.img} class="card-img-top" alt="..." />
          <div className="card-body">
            <h3 className="card-title">Card title</h3>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
    </>
  )
}
