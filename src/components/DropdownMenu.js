import React, { useState , useEffect } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";


const DropdownMenu = () => {

    const navigate = useNavigate()

    const [isAdmin,setIsAdmin] = useState()

    const token = localStorage.getItem("token");

    useEffect(() => {
      if (token) {
          axios
              .get(`http://localhost:3001/users/user`, {
                  headers: {
                      token: token,
                  },
              })
              .then(({ data }) => setIsAdmin(data.rol))
              .catch((error) => console.error(error));
      }
  }, [token])
  

    const handleClickLogOut = (e) => {
        localStorage.removeItem('token')
        window.location.reload();
        navigate(`/`)
    }

    const handleClickCart = (e) => {
        navigate(`/cart`)
    }
    
    const handleClickCreateProduct = (e) => {
      navigate(`/create-product`)
    }

    return (
        <>
            <div className="dropdownUser">
                <ul>
                    <li onClick={handleClickCart}>Carrito</li>
                    <li onClick={handleClickLogOut}>Cerrar Sesion</li>
                    {isAdmin === "admin" ? (
                        <li onClick={handleClickCreateProduct}>Crear producto</li>
                    ) : null}
                </ul>
            </div>
            <div className="dropdownMenu">
                <ul>
                    <li onClick={handleClickCart}>Carrito</li>
                    <li onClick={handleClickLogOut}>Cerrar Sesion</li>
                    {isAdmin === "admin" ? (
                        <li onClick={handleClickCreateProduct}>Crear producto</li>
                    ) : null}
                </ul>
            </div>
        </>
    )

}

export default DropdownMenu