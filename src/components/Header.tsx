import React from 'react'

export const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg" id="AppHeader">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Coordinate</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{flexFlow: "row-reverse"}}>
                    <div className="navbar-nav">
                        <a className="nav-link" href="#">Операции</a>
                        <a className="nav-link" href="#">Выйти</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;