import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import RelatedTourSpotSingleSlider from "./RelatedTourSpotSingleSlider";

const RelatedTourSpotCarosel = ({ relatedTourSpots }) => {
  const options = {
    items: 1,
    loop: false,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: "slideOutUp",
    dots: false,
    margin: 20,
    responsive: {
      1100: {
        items: 3,
      },
      724: {
        items: 2,
      },
      500: {
        items: 1,
      },
      370: {
        items: 1,
        innerHeight: "100%",
        innerWidth: "100%",
      },
    },
  };
  return (
    <main>
      <h4 className="font-semibold text-xl">
        Total Place: {relatedTourSpots?.length || 0}
      </h4>
      <div className="py-4 px-1">
        <OwlCarousel className="owl-theme" {...options}>
          {relatedTourSpots?.map((itm) => (
            <RelatedTourSpotSingleSlider key={itm?.id} itm={itm} />
          ))}
        </OwlCarousel>
      </div>
    </main>
  );
};

export default RelatedTourSpotCarosel;
