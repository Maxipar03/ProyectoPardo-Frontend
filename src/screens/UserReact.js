import Header from "../components/Header";
import Footer from "../components/footer";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"


const UserReact = () => {
    window.scrollTo(0, 0);

    const [name, setName] = useState();

    const token = localStorage.getItem("token");
    
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            axios
                .get(`http://localhost:3001/users/user`, {
                    headers: {
                        token: token,
                    },
                })
                .then(({ data }) => setName(data.nombre))
                .catch((error) => console.error(error));
        } else {
            navigate(`/detail`)
        }
    }, [token,navigate])

    return (
        <div id="pagina">
            <Header />
            <h1>{`¡Felicitaciones ${name}!`}</h1>
            <Footer />
        </div>
    )
}

export default UserReact