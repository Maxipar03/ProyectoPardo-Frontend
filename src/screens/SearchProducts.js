import React, { useEffect, useState } from "react"
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import ListProducts from "../components/ListProducts";
import Pagination from "../components/Pagination";



const SearchProducts = () => {
    
    const { product } = useParams()

    const [searchResults, setSearchResults] = useState([]);

    const [errorMessage,setErrorMessage] = useState("")

    const [currentPage, setCurrentPage] = useState(1)

    const [postsPerPage, setPostsPerPage] = useState(10)

    useEffect(() => {
        axios.get(`http://localhost:3001/products/search/page/${product}`)
      .then((response) => {
        console.log("🚀 ~ file: SearchProducts.js:26 ~ useEffect ~ product:", product)
        console.log(response.data);
        setSearchResults(response.data);
      })
      .catch(error => {
        if (error.response.status === 404) {
            setErrorMessage(error.response.data)
        }
    });
      }, [])

      const lastPostIndex = currentPage * postsPerPage;
      const firstPostIndex = lastPostIndex - postsPerPage;
      const currentPosts = searchResults.slice(firstPostIndex, lastPostIndex)

    return(
        <div className="wrapper">   
            <Header/>
            {errorMessage ? <h1>{errorMessage}</h1> : <div className="categoryPage-title"><h1>Todos los productos "{product}"</h1></div>}
            <ListProducts productsData={currentPosts} />
            <Pagination totalPosts={searchResults.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            <Footer/>
        </div>
    )
}

export default SearchProducts