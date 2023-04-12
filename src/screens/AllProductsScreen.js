import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios";
import ListProducts from "../components/ListProducts";
import Pagination from "../components/Pagination";


const AllProductsScreen = () => {

    window.scrollTo(0, 0)

    const [productsData, setProductsData] = useState([])

    const [errorMessage, setErrorMessage] = useState()

    const [currentPage, setCurrentPage] = useState(1)

    const [postsPerPage, setPostsPerPage] = useState(10)

    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get(`http://localhost:3001/products`)
            setProductsData(data)

        }
        fetchProducts()
            .catch(error => {
                if (error.response.status === 404) {
                    setErrorMessage(error.response.data)
                }
            })
    }, [])

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = productsData.slice(firstPostIndex, lastPostIndex)

    return (
        <div className="wrapper">
            <Header />
            {errorMessage ? <h1>{errorMessage}</h1> : <div className="categoryPage-title"><h1>Todos los productos</h1></div>}
            <ListProducts productsData={currentPosts} />
            <Pagination totalPosts={productsData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <Footer />
        </div>
    )

}


export default AllProductsScreen