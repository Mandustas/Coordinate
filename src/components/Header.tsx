import React from 'react'

export const Header: React.FC = () => {
    return (
        <nav className="navbar navbar-dark bg-dark " id="AppHeader">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Coordinate</a>
                <div className="navbar-nav">
                    <div className="d-flex">
                        <a className="nav-link" style={{padding:".5rem 1rem"}} href="/operations">Операции</a>
                        <a className="nav-link" style={{padding:".5rem 1rem"}} href="#">Выйти</a>   
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;