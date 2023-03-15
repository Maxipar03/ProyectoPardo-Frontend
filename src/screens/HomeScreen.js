import React from "react";
import Header from "../components/Header";
import SlideProducts from "../components/SlideProducts";
import Footer from "../components/footer";
import CardCategory from "../components/CardCategory";

const HomeScreen = () => {
    window.scrollTo(0,0);
    return(
        <div id="pagina">
            <Header />
            <SlideProducts />
            <CardCategory />
            <Footer />
        </div>
    )
}

export default HomeScreen