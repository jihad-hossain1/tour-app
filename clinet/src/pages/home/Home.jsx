import HomeContinent from "../../components/continents/HomeContinent";
import TextAnimation from "./TextAnimation";
import SearchContent from "../../components/SearchCompo/SearchContent";
import OfferSection from "../../components/OfferSection/OfferSection";
import PopularDestination from "../../components/PopularDestination/PopularDestination";

import BannerTAg from "./BannerTAg";
import PopularGuide from "../../components/PopularGuide/PopularGuide";
import HomePageSearchSection from "./HomePageSearchSection/HomePageSearchSection";
import { useEffect, useRef, useState } from "react";
import "./Styles.css"

const Home = () => {
  const [timeRunning] = useState(3000);
  const [timeAutoNext] = useState(5000);
  // eslint-disable-next-line no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(null);

  const nextRef = useRef(null);
  const prevRef = useRef(null);
  const carouselRef = useRef(null);
  const sliderRef = useRef(null);
  const thumbnailBorderRef = useRef(null);
  const timeRef = useRef(null);
  let runTimeOut;
  let runNextAuto;

  useEffect(() => {
    const handleNextClick = () => showSlider("next");
    const handlePrevClick = () => showSlider("prev");

    nextRef.current = document.getElementById("next");
    prevRef.current = document.getElementById("prev");
    carouselRef.current = document.querySelector(".carousel");
    sliderRef.current = carouselRef.current.querySelector(".carousel .list");
    thumbnailBorderRef.current = document.querySelector(".carousel .thumbnail");
    timeRef.current = document.querySelector(".carousel .time");

    thumbnailBorderRef.current.appendChild(
      thumbnailBorderRef.current.querySelectorAll(".item")[0]
    );

    nextRef.current.addEventListener("click", handleNextClick);
    prevRef.current.addEventListener("click", handlePrevClick);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    runNextAuto = setTimeout(() => {
      handleNextClick();
    }, timeAutoNext);

    return () => {
      clearTimeout(runNextAuto);
      nextRef.current.removeEventListener("click", handleNextClick);
      prevRef.current.removeEventListener("click", handlePrevClick);
    };
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      showSlider("next");
    }, timeAutoNext);

    return () => clearTimeout(timeoutId);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const showSlider = (type) => {
    const sliderItems = sliderRef.current.querySelectorAll(
      ".carousel .list .item"
    );
    const thumbnailItems = document.querySelectorAll(
      ".carousel .thumbnail .item"
    );

    if (type === "next") {
      sliderRef.current.appendChild(sliderItems[0]);
      thumbnailBorderRef.current.appendChild(thumbnailItems[0]);
      carouselRef.current.classList.add("next");
    } else {
      sliderRef.current.prepend(sliderItems[sliderItems.length - 1]);
      thumbnailBorderRef.current.prepend(
        thumbnailItems[thumbnailItems.length - 1]
      );
      carouselRef.current.classList.add("prev");
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
      carouselRef.current.classList.remove("next");
      carouselRef.current.classList.remove("prev");
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
      handleNextClick();
    }, timeAutoNext);
  };
  return (
    <div className="pb-10">
      {/* <div className="relative">
        <img
          className="absolute object-cover w-full h-full"
          src="https://res.cloudinary.com/dqfi9zw3e/image/upload/v1702948003/images/ya1b7b2wmtv6fmoi0fyl.webp"
          alt=""
        />
        <div className="pt-36 relative z-10 text-zinc-50 py-6 ">
          <TextAnimation />
          <HomePageSearchSection />
        </div>
      </div>
      <BannerTAg /> */}
        {/* New Banner start */}
        <div className="carousel w-[100%] md:w-full lg:w-full">
      <div className="list">
        <div className="item">
          <img src="https://i.ibb.co/fkPctpH/94065.jpg" alt="" />
          <div className="content max-w-[70%] md:max-w-[80%] lg:max-w-[80%]">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="https://i.ibb.co/RS0YqHH/94598.jpg" alt="" />
          <div className="content max-w-[70%] md:max-w-[80%] lg:max-w-[80%] w">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="https://i.ibb.co/5rG8d6V/86155.jpg" alt="" />
          <div className="content max-w-[70%] md:max-w-[80%] lg:max-w-[80%] w">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="item">
          <img src="https://i.ibb.co/8skKLYk/89957.jpg" alt="" />
          <div className="content max-w-[70%] md:max-w-[80%] lg:max-w-[80%] w">
            <div className="author">LUNDEV</div>
            <div className="title">DESIGN SLIDER</div>
            <div className="topic">ANIMAL</div>
            <div className="des">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              sequi, rem magnam nesciunt minima placeat, itaque eum neque
              officiis unde, eaque optio ratione aliquid assumenda facere ab et
              quasi ducimus aut doloribus non numquam. Explicabo, laboriosam
              nisi reprehenderit tempora at laborum natus unde. Ut,
              exercitationem eum aperiam illo illum laudantium?
            </div>
            <div className="buttons">
              <button>SEE MORE</button>
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
      </div>

      <div className="thumbnail left-[40%] lg:left-[60%]">
        <div className="item">
          <img src="https://i.ibb.co/fkPctpH/94065.jpg" alt="" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src="https://i.ibb.co/RS0YqHH/94598.jpg" alt="" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src="https://i.ibb.co/5rG8d6V/86155.jpg" alt="" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
        <div className="item">
          <img src="https://i.ibb.co/8skKLYk/89957.jpg" alt="" />
          <div className="content">
            <div className="title">Name Slider</div>
            <div className="description">Description</div>
          </div>
        </div>
      </div>

      <div className="arrows ml-[6%] lg:ml-[15%]">
        <button className="icon w-16 h-16 text-xl" ref={prevRef} id="prev">
          {"<"}
        </button>
        <button className="icon w-16 h-16 text-xl" ref={nextRef} id="next">
          {">"}
        </button>
      </div>

      <div ref={timeRef} className="time"></div>
    </div>
      {/* New Banner end */}
      {/* <SearchContent /> */}
      <div className="max-w-screen-xl mx-auto ">
        {/* top destinations section  */}
        <PopularDestination />
        {/* continent section  */}
        <HomeContinent />

        <PopularGuide />
        {/* offers section  */}
        {/* <OfferSection /> */}
      </div>
    </div>
  );
};

export default Home;
