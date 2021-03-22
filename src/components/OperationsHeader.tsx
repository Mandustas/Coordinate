import React from 'react'

function OperationsHeader() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Операции</a>
            <form className="form-inline">
                <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Создать</button>
            </form>
        </nav>
    )
}

export default OperationsHeader
