import React from 'react'
import './ThickCard.css'

export default function ThickCard(props) {
    return (
        <>
            <div className="col-12 ">
                <div className="card mb-3 ThickCard" style={{"max-width": "90%"}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.img} className="img-fluid " alt="..."/>
                        </div>
                        <div className="col-md-8 color Rborder">
                            <div className="card-body color">
                                <h1 className="card-title">Card title</h1>
                                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
