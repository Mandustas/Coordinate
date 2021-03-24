import React from 'react'

function OperationsHeader() {
    function handleClick() {
            document.location.href = "/operation/create"
console.log("CREATE");

    }

    return (
        <nav className="navbar navbar-light bg-light justify-content-between">
            <a className="navbar-brand">Операции</a>
            <button className="btn btn-outline-dark my-2 my-sm-0" onClick={handleClick}>Создать</button>

        </nav>
    )
}

export default OperationsHeader
