import React, { useState, useEffect } from 'react'
import { Nav, Button } from 'react-bootstrap';
import Link from 'next/link'

export default function Navbar() {
    // const currentUrl = window.location.pathname;

    const toggleDarkMode = () => {
        document.body.classList.toggle('light-mode')
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <div className="nav-icon-contatiner">
                    <div className="nav-icons">
                        <a className="navbar-brand" href="/"><i aria-hidden className="fa fa-home" style={{ color: "white", fontSize: 36 }}></i></a>
                        <i aria-hidden className="fa fa-lightbulb" style={{ color: "white", fontSize: 30 }} onClick={toggleDarkMode}></i>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            {/* {currentUrl != '/post/blog'} */}
                            {/* <a className={currentUrl = ('/posts/blog') ? 'active-link' : 'nav-link'}></a> */}
                            <a className="nav-link active" style={{ color: "white" }} href="/posts/blog">All Recipes</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}