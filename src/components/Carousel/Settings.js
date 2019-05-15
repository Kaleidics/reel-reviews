import React from 'react';

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "flex", height: "100%", flexDirection: "column", justifyContent: "center"}}
            onClick={onClick}
        />
    );
}

export const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 7.3,
    slidesToScroll: 7,
    nextArrow: <NextArrow />,
    prevArrow: <NextArrow />,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3.3,
                slidesToScroll: 3,
                initialSlide: 7
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 3.3,
                slidesToScroll: 3
            }
        }
    ]
};