import React from "react";
import { Link } from "react-router-dom";
import CardProducts from "./CardProducts"

const ListProducts = ({ productsData }) => {
    console.log("🚀 ~ file: ListProducts.js:6 ~ ListProducts ~ productsData:", productsData)


    return (


        <div className="category-products">
            {
                productsData.map((products, index) => {

                    return (
                        <CardProducts key={index} imgUrl={products.imgUrl} nombre={products.nombre} precio={products.precio} _id={products._id
                        } />
                    )

                }
                )

            }

        </div>


    )
}

export default ListProducts