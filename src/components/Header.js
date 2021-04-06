import React from 'react'
import '../css/header.css'
import logo from '../css/img/Netflix-logo.png'
import logoProfil from '../css/img/profil.png'

const Header = ({badge}) => {
    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">
                    <h1><img src={logo} alt="" /></h1>
                </div>
                <div className="nav">
                    <a href="/">Accueil</a>
                    <a href="/">Séries</a>
                    <a href="/">Films</a>
                    <a href="/">Nouveautés les plus regardées</a>
                    <a href="/">Ma liste</a>
                </div>
            </nav>
            <div className="account">
                <a href="/"><i className="fas fa-search"></i></a>
                <a href="/">Direct</a>
                <a href="/">Jeunesse</a>
                <a href="/"><i className="fas fa-gift"></i></a>
                <a href="/"><i className="fas fa-bell"></i></a>
                <a href="/" className="profil"><span><img src={logoProfil} alt="" /></span></a>
            </div>
        </header>
    )
}

export {Header}