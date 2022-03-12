import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div>
            <div className="row ">
                <div className="col-12">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-gray" >
                        <div className="container-fluid color_grey">

                            <a className="navbar-brand" href="#"><h1>SIPTO</h1></a>

                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#home">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#Cards">About Us</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#Invest">Invest Now</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#footer">Contact Us</a>
                                    </li>
                                </ul>

                                <button className="btn btn-primary">Buy Now</button>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
