import React from "react"
import logo from "../Logo.png"

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="footer-content">
                <p className="footer-contacto">Contacto</p>
                <p> 4442-3171<i className="fa-solid fa-phone"></i></p>
                <p> javierpardo08@gmail.com<i className="fa-solid fa-envelope"></i></p>
                <p> Callao 1045, Villa Madero, Provincia de Buenos Aires<i className="fa-solid fa-map-pin"></i></p>
                </div> 
                <img className="logo-img-footer" src={logo}/>
            </div>
        </footer>
    )
}

export default Footer