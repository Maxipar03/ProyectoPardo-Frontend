import React from "react";
import { Link } from "react-router-dom";
import ImageCaño from "../img/CañoCategoryImg.jpg"
import ImageChapas from "../img/ChapasCategoryImg.jpg"
import ImagePlanchuelas from "../img/PlanchuelasCategoryImg.jpg"
import MovingComponent from 'react-moving-text'


const CardCategory = () => {

  const Category = [{
    nombre: "Salamandra",
    image: ImageCaño,
    categoryParams: "salamandra",
    id: 1
  },
  {
    nombre: "Planchuelas",
    image: ImagePlanchuelas,
    categoryParams: "planchuela",
    id: 2
  },
  {
    nombre: "Chapas",
    image: ImageChapas,
    categoryParams: "chapas",
    id: 3
  }]

  return (
    <div>
      <MovingComponent
        type="fadeIn"
        duration="3000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none">
        <h3 className="cards-title">Categorias</h3>
        <div className="cards-category">
          {Category.map(Category =>
            <Link key={Category.id} to={`products/category/${Category.categoryParams}`} style={{ textDecoration: 'none' }}>
              <div className="card-category">
                <img src={Category.image} alt="Caños" className="category-img" />
                <h2 className="category-name">{Category.nombre}</h2>
              </div>
            </Link>)
          }
        </div>
      </MovingComponent>
    </div>
  )
}

export default CardCategory