import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import axios from "axios";
import { useFormik } from "formik"
import * as Yup from "yup"

const RegisterScreen = () => {
    window.scrollTo(0, 0);

    const formik = useFormik({
        initialValues: {
            nombre: "",
            apellido: "",
            email: "",
            contraseña: ""
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("Ingrese su nombre en el campo"),
            apellido: Yup.string().required("Ingrese su apellido en el campo"),
            email: Yup.string().required("Ingrese su email en el campo"),
            contraseña: Yup.string().required("Ingrese su contraseña en el campo")
        }),
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: (formData, actions) => {
            const newUser = {
                nombre: formData.nombre,
                apellido: formData.apellido,
                email: formData.email,
                contraseña: formData.contraseña
            }

            axios.post('http://localhost:3001/users/register', newUser)
            actions.resetForm()
        },
    })

    return (
        <div id="pagina">
            <Header />
            <div className="user-container">
            <div className="user-box">
                <h1 className="user-title">Registrarse</h1>
                <form className="user-form" onSubmit={formik.handleSubmit}>
                    <div className="user-input">
                    <label htmlFor="nombre"><strong>Nombre</strong></label>
                    <input type={"text"} name="nombre" onChange={formik.handleChange} value={formik.values.nombre} placeholder = "Ingrese su nombre"/>
                    {formik.errors.nombre ? (<p className="error">{formik.errors.nombre}</p>) : null}
                    </div>
                    <div className="user-input">
                    <label htmlFor="apellido"><strong>Apellido</strong></label>
                    <input type={"text"} name="apellido" onChange={formik.handleChange} error={formik.errors.apellido} value={formik.values.apellido}  placeholder = "Ingrese su apellido"/>
                    {formik.errors.apellido ? (<p className="error">{formik.errors.apellido}</p>) : null}
                    </div>
                    <div className="user-input">
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type={"email"} name="email" onChange={formik.handleChange} error={formik.errors.email} value={formik.values.email}  placeholder = "Ingrese su email" />
                    {formik.errors.email ? (<p className="error">{formik.errors.email}</p>) : null}
                    </div>
                    <div className="user-input">
                    <label htmlFor="contraseña"><strong>Contraseña</strong></label>
                    <input type={"password"} name="contraseña" onChange={formik.handleChange} error={formik.errors.contraseña} value={formik.values.contraseña}  placeholder = "Ingrese una contraseña"/>
                    {formik.errors.contraseña ? (<p className="error">{formik.errors.contraseña}</p>) : null}
                    </div>
                    <button type="submit" className="button-user">REGISTRASE</button>
                </form>
                    <p className="redirect">¿Ya tengo cuenta? <a href="/login">Logearse</a></p>

            </div>
            </div>
            <Footer />
        </div>
    )
}

export default RegisterScreen
