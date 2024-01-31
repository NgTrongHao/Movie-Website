import React, {useState} from "react";
import Slider from "react-slick";
import {Link} from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Films.css'

export default function FilmsPresentation({films}) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const SampleNextArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{...style, display: "block", backgroundColor: "transparent"}}
                onClick={onClick}
            />
        );
    };

    const SamplePrevArrow = (props) => {
        const {className, style, onClick} = props;
        return (
            <div
                className={className}
                style={{...style, display: "block", backgroundColor: "transparent"}}
                onClick={onClick}
            />
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 3,
        nextArrow: <SampleNextArrow/>, // Sử dụng hàm ở đây
        prevArrow: <SamplePrevArrow/>, // Sử dụng hàm ở đây
    };

    return (

        <div className="content">
            <div className="carousel-info">
                <p>List of Films</p>
            </div>
            <div className="carousel-container">
                <Slider {...settings}>
                    {films.map((film, index) => (
                        <Link key={film.id} to={`/film/${film.id}`}>
                            <div
                                key={film.id}
                                className={`column img-container ${hoveredIndex === index ? "hovered" : ""}`}
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <div className="card">
                                    <img src={film.image} alt={film.title}/>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
        </div>
    );

}
