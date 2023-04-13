import React, { useEffect, useState } from "react"
import logo from "../Logo.png"
import { Link } from "react-router-dom";
import axios from "axios";
import DropdownMenu from "./DropdownMenu";
import DropdownMenuMovile from "./DropdownMenuMovile";
import SearchHeader from "./SearchHeader";


const Header = () => {

    const [userLogged, setUserLogged] = useState(false);

    const [name, setName] = useState()

    const [openProfile, setOpenProfile] = useState(false)

    const [openMenu, setOpenMenu] = useState(false)


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
                <Link to={"/"} style={{ textDecoration: 'none' }}><h2 className="title">PARDOHNOS</h2></Link>
            </div>


            <SearchHeader />


            <div className="selectores">
                {userLogged ? (
                    <>
                        <div className="user" onClick={() => { setOpenProfile((prev) => !prev) }}>
                            <i className="fa-solid fa-user">
                            </i><p>{name}</p>
                        </div>
                        <div className="user-movile">
                            <i className={openProfile ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={() => { setOpenProfile((prev) => !prev) }}></i>
                        </div>
                        <div>
                            {openProfile && <DropdownMenu />}
                        </div>
                    </>
                )
                    : (
                        <>
                            <ul className="sessions">
                                <Link to={"/login"} style={{ textDecoration: 'none' }} className="button-login"><li>Iniciar sesion</li></Link>
                                <Link to={"/register"} style={{ textDecoration: 'none' }} className="button-register"><li>Registrarse</li></Link>
                            </ul>
                            <i id="burgerMenu-movile" className={openMenu ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={() => { setOpenMenu((prev) => !prev) }}></i>
                            <div>
                                {openMenu && <DropdownMenuMovile />}
                            </div>
                        </>
                    )
                }
            </div>

        </div>
    )
}

export default Header