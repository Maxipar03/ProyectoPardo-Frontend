import React, { useEffect, useState } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import ListProducts from "../components/ListProducts";

const CategoryProduct = () => {
    const [categoryProducts, setCategoryProducts] = useState([])

    const [errorMessage, setErrorMessage] = useState()

    const { category } = useParams()

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get(`http://localhost:3001/products/category/${category}`)
            setCategoryProducts(data)
        }
        fetchProducts()
            .catch(error => {
                if (error.response.status === 404) {
                    setErrorMessage(error.response.data)
                }
            })
    }, [category])



    return (<div className="wrapper">

        <Header />
        <div className="category-products-container">

        {errorMessage ? <h1>{errorMessage}</h1> : <div className="categoryPage-title"><h1>todos los productos con categoria "{category}"</h1></div>}

        <div className="category-products">

            <ListProducts key={categoryProducts._id} productsData={categoryProducts} />

        </div>
        </div>

        <Footer />
    </div>)

}

export default CategoryProduct