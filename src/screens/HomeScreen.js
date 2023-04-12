import React from "react";
import Header from "../components/Header";
import SlideProducts from "../components/SlideProducts";
import CardCategory from "../components/CardCategory";
import HomeBaner from "../components/HomeBaner";
import Footer from "../components/Footer"
import WhatsAppChat from "../components/WhatsAppChat";

const HomeScreen = () => {
    window.scrollTo(0, 0);
    return (
        <div className="wrapper">
            <Header />
            <HomeBaner />
            <SlideProducts />
            <CardCategory />
            <WhatsAppChat />
            <Footer />

        </div>
    )
}

export default HomeScreen