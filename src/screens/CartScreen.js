import React, { useState, useEffect } from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import axios from "axios"

const CartScreen = () => {
  window.scrollTo(0, 0)

  const [cart, setCart] = useState([])

  const token = localStorage.getItem("token");

  const options = {
    style: 'decimal',
    useGrouping: true,
    minimumIntegerDigits: 1,
    currency: 'USD',
    currencyDisplay: 'symbol',
    notation: 'standard',
    compactDisplay: 'short',
  }

  useEffect(() => {
    axios.get("http://localhost:3001/cart/getCartItems", {
      headers: {
        token: token,
      }
    })
      .then(res => {
        setCart(res.data.cart.cartItems)
      })
  }, [token])

  const handleClickAdd = (productId) => {
    const updatedCart = cart.map(product => {
      if (product._id === productId) {
        return {
          ...product,
          cantidad: product.cantidad + 1
        };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const handleClickRest = (productId) => {
    const updatedCart = cart.map(product => {
      if (product._id === productId) {
        return {
          ...product,
          cantidad: Math.max(product.cantidad - 1, 1)
        };
      }
      return product;
    });
    setCart(updatedCart);
  };

  const totalPrice = () => {
    const total = cart.reduce((accumulator, product) => {
      console.log("🚀 ~ file: CartScreen.js:62 ~ total ~ product:", product)
      return accumulator + (product.producto.precio * product.cantidad);
    }, 0);
    console.log("🚀 ~ file: CartScreen.js:64 ~ total ~ cart:", cart)
    return total;
  };


  const handleClickDelete = (productId) => {
    const updatedCart = cart.filter(product => product._id !== productId);
    console.log("🚀 ~ file: CartScreen.js:70 ~ handleClickDelete ~ updatedCart:", updatedCart)
    setCart(updatedCart);
  };

  const iva = (21 * totalPrice()) / 100

  const totalIva = iva + totalPrice()

  return (
    <div className='wrapper'>
      <Header />
      <div className='cartTable-container'>
        <table className='cartTable'>
          <thead>
            <tr className='cartTable-head'>
              <th></th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Precio</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='tablebody'>
            {cart.map(product => (
              <tr key={product._id} className='cartTable-body'>
                <td><img className='productCart-img' alt='cartImage' src={product.producto.imgUrl} /></td>
                <td>{product.producto.nombre}</td>
                <td> <div className='cartTable-quantity'><i className="fa-solid fa-minus" onClick={() => handleClickRest(product._id)}></i>{product.cantidad}<i className="fa-solid fa-plus" onClick={() => handleClickAdd(product._id)}></i></div></td>
                <td>${product.producto.precio}</td>
                <td><i className="fa-solid fa-trash" onClick={() => handleClickDelete(product._id)}></i></td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className='cartTablePrice-container'>
          <table className='cartTablePrice'>
            <thead>
              <tr className='cartTablePrice-head'>
                <th>Precio total</th>
                <th>Impuestos(21%)</th>
                <th>Precio Final</th>
              </tr>
            </thead>
            <tbody className='cartTablePrice-body'>
              <td>${totalPrice().toLocaleString('es-ES', options)}</td>
              <td>${Math.ceil(iva).toLocaleString('es-ES', options)}</td>
              <td className='cartTablePrice-finalPrice'>${Math.ceil(totalIva).toLocaleString('es-ES', options)}</td>
            </tbody>

          </table>
        </table>

      </div>
      <Footer />
    </div>
  )
}


export default CartScreen