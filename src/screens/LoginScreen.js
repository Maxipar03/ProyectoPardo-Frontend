import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useFormik } from "formik";
import * as Yup from "yup"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
    window.scrollTo(0, 0)

    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState(null)


    const formik = useFormik({
        initialValues: {
            email: "",
            contraseña: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Ingrese su email en el campo"),
            contraseña: Yup.string().required("Ingrese su contraseña en el campo")
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (formData) => {
            const userLogin = {
                email: formData.email,
                contraseña: formData.contraseña
            }

            axios.post('http://localhost:3001/users/login', userLogin).then((res) => {
                const { data } = res
                localStorage.setItem("token", data?.token)
                navigate(`/`)
            })
                .catch(error => {
                    if (error.response.status === 401) {
                        const errorMessage = typeof error.response.data === 'string' ? error.response.data : 'Error desconocido';
                        setErrorMessage(errorMessage);
                    }
                })
        }


    })

    return (
        <div className="wrapper">
            <Header />
            <div className="user-container">
                <div className="user-box">
                    <h1 className="user-title">Iniciar sesion</h1>
                    <form className="user-form" onSubmit={formik.handleSubmit}>
                        <div className="user-input">
                            <label htmlFor="email"><strong>Email</strong></label>
                            <input type={"email"} name="email" onChange={formik.handleChange} value={formik.values.email} placeholder="Ingrese su email" className={formik.errors.email ? "input-error" : "user-formInput"} />
                            {formik.errors.email ? (<p className="error">{formik.errors.email}</p>) : null}
                        </div>
                        <div className="user-input">
                            <label htmlFor="contraseña"><strong>Contraseña</strong></label>
                            <input type={"password"} name="contraseña" onChange={formik.handleChange} value={formik.values.contraseña} placeholder="Ingrese su contraseña" className={formik.errors.contraseña ? "input-error" : "user-formInput"} />
                            {formik.errors.contraseña ? (<p className="error">{formik.errors.contraseña}</p>) : null}
                            {/*Muestra mensaje De error en el caso de que tenga*/}
                            {errorMessage ? <p className="error">{errorMessage}</p> : null}
                        </div>
                        <button type="submit" className="button-user">INGRESAR</button>

                        <p className="redirect">¿No tengo cuenta? <a href="/register">Registrarse</a></p>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LoginScreen