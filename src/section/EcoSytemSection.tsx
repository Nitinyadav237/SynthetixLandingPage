import { containerVariants, imageVariants, itemVariants } from "../Animation";
import { Eco1 } from "../assets/images";
import { world } from "../assets/svg";
import Button from "../components/button";
import CircleArrow from "../components/circleArrow";
import { EcoCard } from "../constant";
import { motion } from 'framer-motion';

const EcoSytemSection = () => {
  
  return (
    <div>
      {/* Heading */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        
        className="mt-36 items-end justify-between md:flex lg:mt-24">
        <motion.h1 variants={itemVariants} className="w-full whitespace-nowrap text-balance text-2xl font-semibold uppercase md:w-4/5 lg:text-[4rem] lg:leading-[4.5rem]">
          /An Ecosystem of defi apps <br /> powered by synthetix.
        </motion.h1>
        <Button label="See More" className="mt-2 px-3 md:mt-0" />
      </motion.div>

      {/* Grid Section */}
      <motion.div variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}

        className="mt-12 rounded-3xl bg-[#f1f2f3] p-4 lg:mt-24">
        <motion.div variants={itemVariants} className="grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* Highlighted Card */}
          <div className="row-span-2 rounded-3xl">
            <div className="rounded-2xl bg-[#def38b] p-6">
              <div className="flex items-center justify-between">
                <div className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-violet-400 bg-white">
                  <motion.img variants={imageVariants}
                    className="h-20 w-20 object-cover"
                    src={Eco1}
                    alt="Perps"
                  />
                </div>
                <motion.h2 variants={itemVariants} className="h-10 w-20 rounded-xl bg-white pt-2 text-center uppercase text-black">
                  Perps
                </motion.h2>
              </div>
              <motion.h1 variants={itemVariants} className="mt-16 text-5xl font-semibold uppercase tracking-wide">
                Kwenta
              </motion.h1>
              <motion.p variants={itemVariants} className="mt-4 text-xl capitalize text-[#5e5e5f] md:text-2xl">
                Trade Crypto, Forex, and commodities with up to 50x leverage and
                deep liquidity.
              </motion.p>
              {/* Visit Website */}
              <motion.div variants={itemVariants} className="mt-20 flex items-center justify-between rounded-2xl bg-white px-3 py-2 md:mt-36">
                <div className="flex items-center gap-6">
                  <img className="h-9 w-9" src={world} alt="world" />
                  <h3 className="text-2xl font-medium capitalize text-[#151617]">
                    Visit Website
                  </h3>
                </div>
                <CircleArrow
                  className="h-16 w-16 rounded-xl bg-[#151617]"
                  whiteArrow="true"
                />
              </motion.div>
            </div>
          </div>

          {/* Cards from EcoCard data */}
          {EcoCard.map((item, index) => (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              

              key={index} className="rounded-3xl bg-white p-4 md:h-[18rem]">
              <div className="flex items-center justify-between">
                <div
                  className={`flex h-24 w-24 items-center justify-center rounded-2xl ${item.color}`}
                >
                  <motion.img
                    variants={imageVariants}
                    className="h-20 w-20 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <motion.h2 variants={ itemVariants} className="h-10 rounded-xl bg-[#f2f2f2] px-3 py-2 text-center uppercase text-black">
                  {item.text}
                </motion.h2>
              </div>
              <motion.h1 variants={itemVariants} className="mt-8 text-4xl font-semibold uppercase tracking-wide">
                {item.title}
              </motion.h1>
              <motion.p variants={itemVariants} className="mt-2 text-xl capitalize text-[#5e5e5f]">
                {item.sub}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Call to Action Section */}
      <motion.div
        variants={containerVariants}
initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="flex flex-col items-center justify-center rounded-3xl border-2 border-gray-300 py-14 md:mt-10 md:px-8">
        <motion.div
          variants={itemVariants}
          className="text-center text-3xl font-semibold uppercase leading-normal lg:text-7xl lg:leading-[5rem]">
          <span className="text-[#d9ee88]">Interested</span> in building in the{" "}
          <br />
          <span>Synthetix</span>
          <span className="text-[#97c3e9]"> Ecosystem?</span>
        </motion.div>
        <motion.div   variants={itemVariants}
 className="mt-5 flex flex-col items-center lg:mt-10">
          <Button label="Integrate with synthetix" />
          <motion.p variants={itemVariants} className="mt-5 px-2 text-center text-base capitalize leading-6 text-[#5e5e5f] lg:mt-10 lg:w-2/3">
            Learn more about how to integrate perps and other synthetix markets
            by visiting the developers documentation and joining the synthetix
            discord.
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default EcoSytemSection;
