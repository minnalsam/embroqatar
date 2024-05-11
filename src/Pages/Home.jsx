import React from "react";
import Carousel from '../compontents/Carousel'


const Home = () => {

  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <div className='flex flex-col min-h-svh'>
      <div>
        <Carousel slides={ slides} />
      </div>
      <div className='h-96'>
        <h1 className='text-3xl font-bold text-blue-500 text-center'>
          This is AboutPage
        </h1>
      </div>
      <div className='h-96'>
        <h1 className='text-3xl font-bold text-blue-500 text-center'>
          This is Products
        </h1>
      </div>
      <div className='h-96'>
        <h1 className='text-3xl font-bold text-blue-500 text-center'>
          This is Service
        </h1>
      </div>
      <div className='h-96'>
        <h1 className='text-3xl font-bold text-blue-500 text-center'>
          This is Contact
        </h1>
      </div>
    </div>
  );
};

export default Home;
