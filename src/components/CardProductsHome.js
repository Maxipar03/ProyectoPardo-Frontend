import React from "react";
import { Link } from "react-router-dom";

const CardProductsHome = ({ imgUrl, nombre, precio, _id }) => {

    const options = {
        style: 'decimal',
        useGrouping: true,
        minimumIntegerDigits: 1,
        currency: 'USD',
        currencyDisplay: 'symbol',
        notation: 'standard',
        compactDisplay: 'short',
    }

    return (
        <div className="products">
            <Link to={`/products/detail/${_id}`} style={{ textDecoration: 'none' }}>
                <div className="components">
                    <img src={imgUrl} alt="hola" className="product-img" />
                    <div className="components-container">
                        <h2>{nombre}</h2>
                        <div className="divider"></div>
                        <h3>{precio.toLocaleString('es-ES', options)}$</h3>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default CardProductsHome