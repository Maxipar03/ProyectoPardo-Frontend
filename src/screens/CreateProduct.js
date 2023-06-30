import Header from "../components/Header";
import Footer from "../components/Footer";
import React, { useState, useEffect, useCallback } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {

  const navigate = useNavigate()

  const [nombre, setNombre] = useState('');
  const [nombreError, setNombreError] = useState('');

  const [image, setImage] = useState('');
  const [imageError, setImageError] = useState('');

  const [precio, setPrecio] = useState('');
  const [precioError, setPrecioError] = useState('');

  const [categoria, setCategoria] = useState('Salamandra');

  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
        axios
            .get(`http://localhost:3001/users/user`, {
                headers: {
                    token: token,
                },
            })
            .then(({ data }) => {
            if (data.rol === "user") {
              navigate("/")
            }
            }
            )
            .catch((error) => console.error(error));
    }
}, [token])


  const validarNombre = useCallback(() => {
    if (nombre.length === 0) {
      setNombreError('El nombre es obligatorio.');
    } else {
      setNombreError('');
    }
  }, [nombre]);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      setImage(selectedImage);
      setImageError('');
    } else {
      setImage(null);
      setImageError('Debes seleccionar una imagen.');
    }
  };

  const validarPrecio = useCallback(() => {
    if (precio.length === 0) {
      setPrecioError('El precio es obligatorio.');
    } else {
      setPrecioError('');
    }
  }, [precio]);

  useEffect(() => {
    const handleValidation = () => {
      validarNombre();
      validarPrecio();
    };

    handleValidation();
  }, [validarNombre, validarPrecio]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validar todos los campos nuevamente antes de enviar el formulario
    validarNombre();
    validarPrecio();

    // Verificar si hay errores
    if (!nombreError && !imageError && !precioError) {
      const formData = new FormData();
      formData.append('nombre', nombre);
      formData.append('image', image);
      formData.append('precio', precio);
      formData.append('categoria', categoria);

      console.log(formData)

      axios.post('http://localhost:3001/products/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
    }
  };

  return (
    <div className="wrapper">
      <Header />
      <div className="user-container">
        <div className="user-box">
          <h1 className="user-title">Crear Producto</h1>
          <form className="user-form" onSubmit={handleSubmit} encType="multipart/form-data" >
            <div className="user-input">
              <label htmlFor="nombre"><strong>Nombre</strong></label>
              <input type={"text"} name="nombre" placeholder="Ingrese el nombre del producto" value={nombre} onChange={(e) => setNombre(e.target.value)} />
              {nombreError && <div className="error-message">{nombreError}</div>}
            </div>
            <div className="user-input">
              <label htmlFor="image"><strong>Imagen</strong></label>
              <input type="file" name="image" onChange={(e) => handleImageChange(e)} />
              {imageError && <div className="error-message">{imageError}</div>}
            </div>
            <div className="user-input">
              <label htmlFor="precio"><strong>Precio</strong></label>
              <input type={"text"} name="precio" placeholder="Ingrese el precio" onChange={(e) => setPrecio(e.target.value)} />
              {precioError && <div className="error-message">{precioError}</div>}
            </div>
            <div className="user-input">
              <label><strong>Categoria</strong></label>
              <select name="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
                <option>salamandra</option>
                <option>chapas</option>
                <option>planchuela</option>
              </select>
            </div>
            <button type="submit" className="button-user">SUBIR PRODUCTO</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>)

}

export default CreateProduct