import React, { useEffect } from "react";
import gsap from "gsap";

const TextAnimation = () => {
  useEffect(() => {
    let textAnime = gsap.timeline();
    textAnime.from(".word", {
      x: 500,
      stagger: {
        each: 0.08,
      },
    });
  }, []);
  useEffect(() => {
    let textAnime = gsap.timeline();
    textAnime.from(".word2", {
      y: 100,
      stagger: {
        each: 0.03,
      },
    });
  }, []);
  return (
    <div className="text-center flex flex-col gap-5 md:py-8 ">
      <div className="word font-extrabold text-4xl md:text-5xl xl:text-6xl flex items-center justify-center">
        {"Let the journey begin".split("").map((word, index) => {
          return word === " " ? (
            <div key={index} className="word">&nbsp;</div>
          ) : (
            <div key={index} className="word">{word}</div>
          );
        })}
      </div>
      <div className="word2 flex items-center justify-center md:text-2xl">
        {"Get the best prices on 2,000,000+ properties, worldwide"
          .split("")
          .map((word, index) => {
            return word === " " ? (
              <div key={index} className="word2">&nbsp;</div>
            ) : (
              <div key={index} className="word2">{word}</div>
            );
          })}
      </div>
    </div>
  );
};

export default TextAnimation;
