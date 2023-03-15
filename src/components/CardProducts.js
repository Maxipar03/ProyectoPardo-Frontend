import React from "react";
import { Link } from "react-router-dom";


const CardProducts = (props) => {
    return (
        <Link to={`products/detail/${props.product._id}`} style={{ textDecoration: 'none' }}>
        <div className="products">
        <div className="components">
            <img src={props.product.imgUrl} alt="hola" className="product-img" />
            <div className="components-container">
            <h2>{props.product.nombre}</h2>
            <h3>{props.product.precio}$</h3>
            </div>
        </div>
        </div>
        </Link>   
    )
}

export default CardProducts