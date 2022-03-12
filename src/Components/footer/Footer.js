import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <div>
            <footer id='footer'>
                <div className="row">
                    <div className="firstElement col-lg-4">
                        <h2 >SIPTO</h2>
                        <p >
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum nihil dolores id aperiam. Laborum dolorum illo quisquam quos odit cum id numquam, corporis recusandae vel eveniet tempore, enim expedita iste.
                        </p>
                    </div>
                    <div className="secondElement col-lg-4">
                        <h2>Quick Links</h2>
                        <ul>
                            <li>What is Sipto?</li>
                            <li>What it Works?</li>
                            <li>Investment Strategy</li>
                            <li>Completed Deal</li>
                            <li>Blog</li>
                            <li>Refer and Earn</li>
                        </ul>
                    </div>
                    <div className="thirdElement col-lg-4">
                        <h2>Company</h2>
                        <ul>
                            <li>123-A, ABC Tower, Sector-44, Bangalore</li>
                            <li>invest@sipto.in</li>
                        </ul>
                    </div>
                </div>
            </footer>
            <div className="line"></div>
            <div className="forthElement col-md-12">
                <ul>
                    <li>Terms</li>
                    <li>Privacy</li>
                    <li>FAQ</li>
                </ul>
                <ul >
                    <li><i class="bi bi-instagram"></i></li>
                    <li><i class="bi bi-facebook"></i></li>
                    <li><i class="bi bi-linkedin"></i></li>
                    <li><i class="bi bi-twitter"></i></li>
                </ul>
            </div>
        </div >
    )
}
