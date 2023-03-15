import React, { useEffect, useState } from "react";
import axios from "axios";
import RotateLoader from "react-spinners/RotateLoader"
import CardProducts from "./CardProducts";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";


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

  const lastFiveProducts = products.slice(-6)

  return (
    <div>
      <div className="product-slide">
        <h3>Novedades</h3>
        <Link to={`/products/detail/`} style={{ textDecoration: 'none' }}> <h5 className="allProducts-Redirect">Ver todos los productos <FontAwesomeIcon icon={faArrowRight} /></h5> </Link>
      </div>
      {cargando &&
        <div className="container-spinner">
          <div className="spinner">
            <RotateLoader color="#36d7b7" />
          </div>
        </div>}

      <div className="last5Products">
        {
          lastFiveProducts.map(product => (<CardProducts key={product._id} product={product} />))
        }
      </div>

    </div>
  )
}

export default SlideProducts