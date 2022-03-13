import React from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/"><i aria-hidden className="fa fa-home" style={{ fontSize: 36 }}></i></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/posts/blog">All Recipes</a>
                        </li>
                        {/* <li class="nav-item">
                            <a class="nav-link" href="#">Features</a>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>

    )
}