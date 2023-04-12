import React, { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"


const ProductsDetail = () => {
    const [detailProduct, setDetailProduct] = useState([])

    const [errorMessage, setErrorMessage] = useState()

    const navigate = useNavigate();


    const { id } = useParams()

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get(`http://localhost:3001/products/${id}`)
            setDetailProduct(data)
        }
        fetchProducts()
            .catch(error => {
                if (error.response.status === 404) {
                    setErrorMessage(error.response.data)
                }
            })
    }, [id])

    console.log(detailProduct)

    const handleClick = (e) => {

        e.preventDefault()

        const token = localStorage.getItem("token");


        if (token) {
            axios.post("http://localhost:3001/cart/add-to-cart", {
                cartItems: {
                    producto: detailProduct._id,
                    cantidad: 1,
                    precio: detailProduct.precio,
                }
            }, {
                headers: {
                    token: token,
                }
            })
        } else {
            navigate(`/login`)
        }
    }

    return (<div className="wrapper">
        <Header />
        {errorMessage ? <p>{errorMessage}</p> : null}
        <div className="productDetail-container">
            <div className="productDetail-card">
                <img src={detailProduct.imgUrl} alt="product_image" className="productDetail-img" />
                <div className="productDetail-content">
                    <h1 className="productDetail-name">{detailProduct.nombre}</h1>
                    <div className="productDetail-info">
                        <div className="productDetail-category">
                            <h2>Categoria</h2>
                            <h3>{detailProduct.categoria}</h3>
                        </div>
                        <div className="productDetail-size">
                            <h2>Tamaño</h2>
                            <h3>30cm</h3>
                        </div>
                    </div>
                    <div className="productDetail-buy">
                        <h2 className="productDetail-precio">{detailProduct.precio}$</h2>
                        <button className="productDetail-button" onClick={handleClick}>Comprar</button>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>)

}

export default ProductsDetail