import React from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { CreateTypes } from "./ReviewPage"

export const Header: React.FC = () => {
    const { isAuth } = useTypedSelector(state => state.auth)

    return (
        <nav className="navbar navbar-dark bg-dark " id="AppHeader">
            <div className="container-fluid">
                <a className="navbar-brand" href="/home">Coordinate</a>
                <div className="navbar-nav">
                    <div className="d-flex">
                        {
                            isAuth
                                ? <a
                                    className="nav-link"
                                    style={{ padding: ".5rem 1rem" }}
                                    href="/operations"
                                >Операции</a>
                                : null
                        }
                        {
                            !isAuth
                                ?
                                <a
                                    className="nav-link"
                                    style={{ padding: ".5rem 1rem" }}
                                    href="#"
                                    onClick={() => {
                                        $("#" + CreateTypes.ModalSignIn).modal('show')
                                    }}
                                >Вход</a>
                                :
                                <a
                                    className="nav-link"
                                    style={{ padding: ".5rem 1rem" }}
                                    href="#"
                                    onClick={()=> {
                                        localStorage.removeItem("token")
                                        document.location.href = "/home"
                                    }}
                                >Выход</a>
                        }

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;