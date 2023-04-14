import React from "react";
import Slider from "react-slick";

const Banner = () => {
  const data = [
    {
      id: 1,
      img: "/bg.jpeg",

      title: "WE NEED THE TONIC OF WILDNESS",
    },
    {
      id: 2,
      img: "/bg2.jpeg",

      title: "WE NEED THE TONIC OF WILDNESS",
    },
    {
      id: 3,
      img: "/bg3.jpeg",

      title: "WE NEED THE TONIC OF WILDNESS",
    },
  ];

  const settings = {
    dots: true,
    fade: true,
    arrows: false,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };
  return (
    <Slider
      className="flex object-cover w-screen bg-no-repeat   "
      {...settings}
    >
      {data.map((e) => (
        <div className="relative" id={e.id}>
          <img
            className="-z-10 absolute  object-cover backdrop-blur-sm w-full h-[60vh]"
            src={e.img}
          />
          <div className="flex flex-col items-center justify-center h-[60vh] z-10 space-y-10">
            <h1 className="text-white text-xl md:text-3xl">{e.title}</h1>
            <button className="border border-white text-white px-5 py-2 rounded">
              Read More
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
