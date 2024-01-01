import React, { useEffect } from "react";
import iqoo5gsale from "../Assets/iqoo5gsale.jpg";
import electronicssale from "../Assets/electronicssale.jpg";
import groceriessale from "../Assets/groceriessale.jpg";
import "./Carousel.css"; 
function Carousel() {
    useEffect(() => {
        const interval = setInterval(() => {
            const button = document.getElementById('nextbtn');
            if (button) {
                button.click();
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-container mt-5">
            <div id="carouselExampleIndicators" className="carousel slide">

                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={electronicssale} className="d-block w-100 img-fluid" alt="Electronics sale" />
                    </div>
                    <div className="carousel-item">
                        <img src={groceriessale} className="d-block w-100 img-fluid" alt="Groceries sale" />
                    </div>
                    <div className="carousel-item">
                        <img src={iqoo5gsale} className="d-block w-100 img-fluid" alt="Iqoo 5g sale" />
                    </div>
                </div>

                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" id="nextbtn" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" >
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carousel;
