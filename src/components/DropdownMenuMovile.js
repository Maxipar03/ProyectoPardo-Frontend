import React from "react";

import { useNavigate } from "react-router-dom";


const DropdownMenuMovile = () => {

    const navigate = useNavigate()

    const handleClickLogOut = (e) => {
        navigate(`/register`)
    }
    const handleClickLogin = (e) => {
        navigate(`/login`)
    }

    return (
        <div className="dropdownMenu">
            <ul>
                <li onClick={handleClickLogin}>Iniciar Sesion</li>
                <li onClick={handleClickLogOut}>Registrarse</li>
            </ul>
        </div>
    )

}

export default DropdownMenuMovile