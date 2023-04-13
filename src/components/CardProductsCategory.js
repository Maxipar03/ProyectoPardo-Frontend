import React from "react";
import { Link } from "react-router-dom";

const CardProductsCategory = (props) => {
    return (
        <Link to={`/products/detail/${props.product._id}`} style={{ textDecoration: 'none' }}>
        <div className="products-CategoryCard">
        <div className="components">
            <img src={props.product.imgUrl} alt="hola" className="product-img" />
            <h2>{props.product.nombre}</h2>
            <h3>{props.product.precio}$</h3>
        </div>
    </div>
    </Link>   
    )
}

export default CardProductsCategory