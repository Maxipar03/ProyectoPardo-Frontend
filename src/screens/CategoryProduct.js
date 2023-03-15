import React, { useEffect, useState } from "react";
import Footer from "../components/footer"
import Header from "../components/Header";
import CardProductsCategory from "../components/CardProductsCategory";
import { useParams } from "react-router-dom";
import axios from "axios";

const CategoryProduct = () => {
       const [categoryProducts, setCategoryProducts] = useState([])

       const [errorMessage,setErrorMessage] = useState()

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
                
        

return (<div id="pagina">
        <Header/>
                {errorMessage ? <h1>{errorMessage}</h1> : <div className="categoryPage-title"><h1>todos los productos con categoria "{category}":</h1></div>  }
                
                <div className="category-products">
                {  
                    categoryProducts.map(product => (
                    
                    <CardProductsCategory key={product._id} product={product}/>)
                    )
                }
                </div>
                 
        <Footer/>
        </div>)

}

export default CategoryProduct