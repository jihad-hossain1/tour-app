import SearchTab from "./SearchTab";
import { motion } from "framer-motion";
import { framer_card } from "../../utils/animation";
import { SlMagnifier } from "react-icons/sl";
import { useState } from "react";

const SearchContent = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <>
      <div className="md:hidden mt-3 pl-4">
        {isToggle ? (
          <button
            whileHover={{ scale: 1.05, rotate: "-1deg" }}
            whileTap={{ scale: 0.95 }}
            className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
            onClick={() => setIsToggle(!isToggle)}
          >
            close
          </button>
        ) : (
          <motion.button
            whileHover={{ scale: 1.05, rotate: "-1deg" }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
            onClick={() => setIsToggle(!isToggle)}
          >
            <SlMagnifier /> Select & Search
          </motion.button>
        )}
        {isToggle && (
          <motion.div {...framer_card} className="flex justify-center">
            <SearchTab />
          </motion.div>
        )}
      </div>
      <motion.div {...framer_card} className="hidden md:flex justify-center">
        <SearchTab />
      </motion.div>
    </>
  );
};

export default SearchContent;
