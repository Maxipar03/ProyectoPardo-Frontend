import React, { useEffect, useState } from "react";
import axios from "axios";
import RotateLoader from "react-spinners/RotateLoader"
import CardProductsHome from "./CardProductsHome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import MovingComponent from 'react-moving-text'


const SlideProducts = () => {

  const [cargando, setCargando] = useState(true);

  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/products")
      setProducts(data)
    }
    fetchProducts()
    setCargando(false)
  }, [])

  const lastFiveProducts = products.slice(-5)

  return (
    <div className="slide-container">
      <MovingComponent
        type="fadeIn"
        duration="3000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none">
        <div className="slide-text">
          <h3>Novedades</h3>
          <Link to={`/products/all`} style={{ textDecoration: 'none' }}> <h4 className="allProducts-Redirect">Ver todos los productos <FontAwesomeIcon icon={faArrowRight} /></h4> </Link>
        </div>
        {cargando &&
          <div className="container-spinner">
            <div className="spinner">
              <RotateLoader color="#36d7b7" />
            </div>
          </div>}
        <div className="slide-last5Products">
          {
            lastFiveProducts.map(product => (<CardProductsHome key={product._id} imgUrl={product.imgUrl} precio={product.precio} nombre={product.nombre} />))
          }
        </div>
      </MovingComponent>
    </div>
  )
}

export default SlideProducts