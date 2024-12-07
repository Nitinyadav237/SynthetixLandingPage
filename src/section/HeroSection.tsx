import { eyeimg, image1, image2, image3 } from "../assets/images";
import { explore } from "../assets/svg";
import ImageHolder from "./../components/ImageHolder";
import { motion } from 'framer-motion';
const HeroSection = () => {
    const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time between each child animation
      },
    },
  };

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" }, // Added ease
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"

      className="flex flex-col lg:flex-row">
      <motion.div variants={textVariants} className="pr-20 text-[3rem] font-semibold uppercase leading-[3.5rem] tracking-wide md:py-12 md:text-[6rem] md:leading-[7rem] lg:py-32 lg:text-[8rem] lg:leading-[8rem]">
        <span className="-mb-12 flex items-center gap-2 md:-mb-28">
          <span>The</span>
          <span className="inline-flex h-14 w-32 justify-center rounded-full border-2 border-[#97c3e9] px-4 pt-1 text-center text-[#97c3e9] md:h-24 md:w-60">
            ***
          </span>
        </span>
        <br />
        <span className="pl-2 text-[#97c3e9]">Liquidity</span>
        <br />
        <span className="whitespace-nowrap pl-2">layer of</span>
        <br />
        <div className="items-center gap-6 md:flex">
          <span className="text-[#d9ee88]">Defi</span>
          <p className="text-balance text-sm font-normal capitalize leading-7 md:w-2/3">
            Synthetix provides liquidity for permissionless derivatives like
            perpetual futures
          </p>
        </div>
        {/* customer-info */}
        <div className="mt-10 flex flex-col items-center border-y border-[#919293] py-3 md:flex-row md:gap-8 lg:mt-20 lg:px-14 lg:py-6">
          <div className="flex w-full items-center gap-5 md:gap-10">
            <h1 className="text-4xl lg:text-5xl">+120k</h1>
            <div className="relative flex h-14 w-14">
              <img
                className="absolute -left-2 h-full w-full rounded-full object-cover"
                src={image1}
                alt="img1"
              />
              <img
                className="absolute left-8 h-full w-full rounded-full object-cover"
                src={image2}
                alt="img2"
              />
              <img
                className="absolute left-16 h-full w-full rounded-full object-cover"
                src={image3}
                alt="img3"
              />
            </div>
          </div>
          <p className="mt-2 w-full text-center text-base font-normal capitalize leading-7 md:ml-12 md:mt-0">
            satisfied customer of our company
          </p>
        </div>
      </motion.div>

      {/* right side image */}
      <div  className="relative mt-32 h-full w-full md:mt-20 lg:mt-0">
        <ImageHolder />

        {/* circle eyeImage */}
        <div className="t absolute -left-3 -top-10 z-10 flex h-48 w-48 items-center justify-center rounded-full border border-[#a6a5a6] md:-left-16 md:top-1/2 md:h-72 md:w-72 lg:-left-24">
          <p className="absolute text-base uppercase">
            <img className="h-72 w-72 animate-spin-slow" src={explore} alt="" />
          </p>
          <div className="flex h-56 w-56 items-center justify-center px-5">
            <img className="object-cover" src={eyeimg} alt="eyeImg" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
