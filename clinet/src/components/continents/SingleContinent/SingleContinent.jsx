import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { framer_card } from "../../../utils/animation";
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
          <Box
            component="img"
            sx={{
              height: 233,
              width: "100%",
              maxHeight: { xs: 130, md: 160 },
              // maxWidth: { xs: "100%", md: 250 },
            }}
            alt="Continet photo"
            src={continent?.img}
          />
          {/* <img className=" object-cover " src={continent?.img} alt="" /> */}
          <div className="py-2">
            <h4 className="text-center font-semibold">{continent?.name}</h4>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default SingleContinent;


