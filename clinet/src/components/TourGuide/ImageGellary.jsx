import React, { useState } from "react";
import { BottomDrawer } from "./TourGuideDetails/BottomDrawer/BottomDrawer";

const ImageGellary = ({ images }) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const handleButtonClick = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="my-2">
          {images?.slice(0, 1).map((img, index) => (
            <div key={index}>
              <img
                onClick={handleButtonClick}
                className="h-[400px] w-full rounded-xl hover:bg-black hover:opacity-95 cursor-pointer"
                src={img?.img}
                alt="tour guide image"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-2 ">
            {images?.slice(1, 3).map((img, index) => (
              <div key={index}>
                <img
                  onClick={handleButtonClick}
                  className="h-[200px] w-[320px] rounded-xl hover:bg-black hover:opacity-95 cursor-pointer"
                  src={img?.img}
                  alt="tour guide image"
                />
              </div>
            ))}
          </div>
          <div className="flex gap-2 ">
            {images?.slice(3, 5).map((img, index) => (
              <div key={index}>
                <img
                  onClick={handleButtonClick}
                  className="h-[200px] w-[320px] rounded-xl hover:bg-black hover:opacity-95 cursor-pointer"
                  src={img?.img}
                  alt="tour guide image"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {isDrawerOpen && <BottomDrawer images={images} />}
    </>
  );
};

export default ImageGellary;
