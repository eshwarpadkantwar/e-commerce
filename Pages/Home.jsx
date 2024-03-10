import React from "react";
import Navbar from "../Components/Navbar";
import Searchbar from "../Components/Searchbar";
import Carousel from "../Components/Carousel";
import Bestdeals from "../Components/Bestdeals";
import Footerr from "../Components/Footerr";



function Home(){

    return(
        <div>
        <Navbar/>
        <Searchbar/>
        <Carousel/>
        <Bestdeals/>
        <Footerr/>

        </div>
    )
}

export default Home


