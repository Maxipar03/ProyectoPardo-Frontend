import React from "react";

import { useNavigate } from "react-router-dom";


const DropdownMenu = () => {

    const navigate = useNavigate()

const handleClickLogOut = (e) => {
    localStorage.removeItem('token')
    window.location.reload();
    navigate(`/`)
}
const handleClickCart = (e) => {
    navigate(`/cart`)
}

return(
<div className="dropdownUser">
    <ul>
        <li onClick={handleClickLogOut}>Cerrar Sesion</li>
        <li onClick={handleClickCart}>Carrito</li>
    </ul>
</div>
)

}

export default DropdownMenu