import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../../Header';

function User() {
    const [bestmobile, setBestMobile] = useState([])

    const bestElectronics = async () => {
        let { data } = await axios.get(`http://localhost:8000/product?category=mobile&market=best`);
        setBestMobile(data)
    }

    useEffect(() => {
        bestElectronics();
    }, [])

    return (
        <div>
            <Header/>
            <div id="carouselExampleDark" className="carousel carousel-dark slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={2} aria-label="Slide 3" />
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/977fcd33f4fd525f.jpg?q=20" className="d-block w-100" alt="..." />
                       
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/7fd0e4ab26429926.jpg?q=20" className="d-block w-100" alt="..." />
                        
                    </div>
                    <div className="carousel-item">
                        <img src="https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/5a2311ff9e965a96.jpeg?q=20" className="d-block w-100" alt="..." />
                      
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>

    )
}

export default User