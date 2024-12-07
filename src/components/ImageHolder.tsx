import { aboutimg, heroImg, imagebtm } from "../assets/images";
import { arrowSkipBack, play } from "../assets/svg";
import { motion } from 'framer-motion';

const ImageHolder = () => {
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animation
      },
    },
  };


  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeInOut" }, // Added ease
    },
  };

  const imageVariants = {
    hidden: { x: 200, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeInOut" }, // Added ease
    },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible" className="flex h-[60vh] items-center justify-center pr-2 md:pr-0 lg:h-[110vh]">
      {/* Main Rectangle Container */}
      <motion.div variants={imageVariants} 
        className="relative h-full w-full rounded-t-3xl rounded-br-3xl bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Top Rounded Tab */}
        <div className="rounded-tab absolute -top-20 right-12 h-20 w-60 rounded-t-3xl bg-[#b3d5f0] md:right-16 md:w-96"></div>

        {/* Bottom Rectangle with Inner Tab */}
        <div
          className="absolute -bottom-20 right-32 lg:right-36 h-20 w-[7rem] rounded-b-3xl bg-cover md:w-[21rem]"
          style={{ backgroundImage: `url(${imagebtm})` }}
        >
          <div className="absolute -right-[7.5rem] top-2 flex h-16 w-28">
            <div className="h-full w-16 border-2">
              <img
                className="h-full w-full object-cover"
                src={aboutimg}
                alt="About"
              />
            </div>
            <motion.div variants={buttonVariants} className="flex flex-col items-center justify-center bg-[#d9ee88]">
              <h4 className="text-sm font-normal uppercase">/About</h4>
              <img className="h-6 w-6" src={play} alt="Play" />
            </motion.div>
          </div>
        </div>

        {/* Inner Bottom Tab */}
        <div
          className="absolute -bottom-20 left-0 h-20 w-12 rounded-b-3xl bg-cover md:w-20"
          style={{ backgroundImage: `url(${imagebtm})` }}
        />

        {/* Scroll Indicator */}
        <div  className="absolute -bottom-[3.8rem] left-7 flex h-8 w-20 -rotate-90 items-center justify-center rounded-full bg-[#d9ee88] md:left-16">
          <img className="h-4 w-4" src={arrowSkipBack} alt="Scroll" />
          <h4 className="text-sm uppercase tracking-tight">Scroll</h4>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImageHolder;
