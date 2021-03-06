import React from 'react';

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex", height: "100%", flexDirection: "column", justifyContent: "center" }}
      onClick={onClick}
    />
  );
}

export const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 6.3,
      slidesToScroll: 6,
      nextArrow: <NextArrow />,
      prevArrow: <NextArrow />,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 4.3,
            slidesToScroll: 4,
            arrows: false
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3.3,
            slidesToScroll: 3,
            initialSlide: 7,
            arrows: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2.3,
            slidesToScroll: 2,
            arrows: false
          }
        }
      ]
    };