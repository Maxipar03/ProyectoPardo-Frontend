import React from "react";
import bannerImg from "../img/hd-wallpaper-g71507590f_1280-1.png"
import MovingComponent from 'react-moving-text'

const HomeBaner = () => {

    return (
        <div className="banner-container">
            <img className="image-banner" src={bannerImg} alt="imageBanner" />
            <MovingComponent
                type="fadeIn"
                duration="3000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none"><h1 className="title-banner">Forjando calidad y resistencia para tus proyectos desde <span className="title-banner-bold">1982</span></h1>
                <button className="button-Contact">Contacto</button>
            </MovingComponent>
        </div>
    )
}

export default HomeBaner