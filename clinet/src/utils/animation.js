// export const = {

// }

 // whileHover={{scale: 1.1}}
        // initial={{opacity: 0 , scale: 0 }}
        // animate={{ opacity: 1, scale: 1, x:5 ,y: 0  }}
        // transition={{
        //   type: "spring",
        //   stiffness: 100,
        //   damping: 30,
          
// }}
        

export const framer_card = {
 whileHover:{scale: 1.1},
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
  transition: { duration: 0.3,type: "spring", stiffness: 100, },
};