import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import Footer from "../components/footer";
import axios from "axios"

const CartScreen = () => {
    window.scrollTo(0,0)

    const [cart,setCart] = useState([])
    console.log("🚀 ~ file: CartScreen.js:10 ~ CartScreen ~ cart", cart)
    

    const token = localStorage.getItem("token");
    
    useEffect(() => {
        axios.get("http://localhost:3001/cart/getCartItems", {
            headers: {
                token: token,
            }})
        .then(res => {
            setCart(res.data.cart.cartItems)
        })
    },[token])


    return(
        <div id='pagina'>
        <Header/>
        {cart.map(product => (
            <div className='productCart-container' key={product._id}>
            <img className='productCart-img' alt='cartImage' src={product.producto.imgUrl}/>
            <h1>{product.producto.nombre}</h1>
            <h3>{product.cantidad}</h3>
            <h3>{product.producto.precio}$</h3>
            </div>
        ))}
        <Footer/>
        </div>
    )
}


export default CartScreen