import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Box, Card } from "@mui/material";

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
        <Card sx={{ maxWidth: 345 }}>
          <div className="relative rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-500 ease-in-out">
            <div
              className="w-full h-[170px] bg-cover bg-center pt-4 relative group"
              style={{ backgroundImage: `url(${continent?.img})` }}
            >
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 transition-opacity opacity-0 group-hover:opacity-100">
                <div className="text-center w-full scale-0 translate-y-4 transition-transform duration-500 ease-in-out group-hover:scale-100 group-hover:translate-y-0">
                  <span className="text-white text-xs bg-yellow-500 rounded-md w-[30%] mx-auto mb-2 h-[20px] transition-opacity duration-500 ease-in-out p-1">
                    Click to view
                  </span>
                  <h1 className="text-white text-3xl mx-auto">
                    {continent?.name}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default SingleContinent;


