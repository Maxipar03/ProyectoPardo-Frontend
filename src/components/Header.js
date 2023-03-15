import React, { useEffect, useState } from "react"
import logo from "../Logo.png"
import { Link } from "react-router-dom";
import axios from "axios";
import DropdownMenu from "./DropdownMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Header = () => {

    const [userLogged, setUserLogged] = useState(false);

    const [name, setName] = useState()

    const [openProfile, setOpenProfile] = useState(false)

    const token = localStorage.getItem("token");

    useEffect(() => {
        if (token) {
            axios
                .get(`http://localhost:3001/users/user`, {
                    headers: {
                        token: token,
                    },
                })
                .then(({ data }) => setName(data.nombre))
                .catch((error) => console.error(error));

            setUserLogged(true)
        }

    }, [token])
    return (
        <div className="header">
            <div className="logo">
                <Link to={"/"}><img src={logo} alt="" className="logo-img" /></Link>
                <Link to={"/"} style={{ textDecoration: 'none' }}><h2 className="title">Caños Pardos</h2></Link>
            </div>
            
            <div className="search">
                <input placeholder="Buscar producto..." type={"search"} name={"search"} className="search-bar"></input><button type="submit" className="search-button"><FontAwesomeIcon icon={faSearch} /></button>
            </div>
            <div className="selectores">
                {userLogged ? (
                <>
                <div className="user" onClick={() => {setOpenProfile((prev) => !prev)}}>
                    <i className="fa-solid fa-user">
                    </i><p>{name}</p>
                </div>
                <div>
                {openProfile && <DropdownMenu/>}
                </div>
                </>
                )
                    : (<ul>
                        <Link to={"/login"} style={{ textDecoration: 'none' }} className="button-login"><li>Iniciar sesion</li></Link>
                        <Link to={"/register"} style={{ textDecoration: 'none' }} className="button-register"><li>Registrarse</li></Link>
                    </ul>)}
            </div>
        </div>
    )
}

export default Header