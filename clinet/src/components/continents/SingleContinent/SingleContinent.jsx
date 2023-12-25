import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { framer_card } from "../../../utils/animation";

export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.3,
      type: "spring",
      stiffness: 200,
      dump: 30,
    },
  }),
  exit: { opacity: 0, y: 10 },
};

const SingleContinent = ({ continent, index }) => {
  return (
    <Link to={`/continent/${continent?.id}`}>
      <motion.div
        whileHover={{
          scale: 1.03,
          transition: { duration: 0.35 },
        }}
        variants={fadeInAnimationVariants}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom={index}
        className="relative"
      >
        <div className="transition-all duration-300 relative shadow-[2px_3px_10px_rgba(0,0,0,0.25)] hover:shadow-[2px_5px_25px_rgba(0,0,0,0.25)] rounded-lg">
          <img
            className=" object-cover rounded-lg h-80 md:h-96"
            src={continent?.img}
            alt=""
          />
        </div>
        <div className="absolute md:top-[50%] md:right-[50%]">
          <h4 className="-mt-10 md:mt-0 ml-10 font-semibold text-xl md:text-3xl lg:text-4xl text-white  flex  items-center gap-2 ">
            <span className="break-all md:break-after-auto">
              {continent?.name}
            </span>
            <span className="text-orange-500">{continent?.code}</span>
          </h4>
        </div>
      </motion.div>
    </Link>
  );
};

export default SingleContinent;


