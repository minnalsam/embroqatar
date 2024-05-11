import React, { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };
  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className='overflow-hidden relative'>
          <div
        className={`flex transition ease-out duration-500`}
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, i) => {
          return (
            <img
              key={i}
              src={slide}
              alt='Embroidery Ricoma Qatar Sales and Service'
            />
          );
        })}
      </div>

      <div className='absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl'>
              <button onClick={previousSlide}><ArrowBackIosIcon /></button>
              <button onClick={nextSlide}>
                  <ArrowForwardIosIcon/>
        </button>
      </div>

      <div className='absolute bottom-0 py-4 flex justify-center gap-3 w-full'>
        {slides.map((slide, i) => {
          return (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full w-5 h-5 cursor-pointer ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Carousel;
