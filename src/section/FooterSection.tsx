import { containerVariants, imageVariants, itemVariants } from "../Animation";
import { email, isLess, logo, rightArrow } from "../assets/svg";
import { cardInfo, footAbout, footHome, icons } from "../constant";
import { motion } from 'framer-motion';

const FooterSection = () => {
  return (
    <div className="mt-20 md:mt-[44rem] lg:mt-[92rem]">
      {/* First Part */}
      <motion.div
         variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col items-center justify-center gap-8 lg:flex-row">
        {cardInfo.map((item) => (
          <div
            key={item.id}
            className="group rounded-2xl border-2 border-[#97c3e9] px-8 py-4 hover:cursor-pointer hover:border-none hover:bg-[#a4caeb] md:h-[23rem] md:w-[32rem]"
          >
            <motion.div variants={itemVariants} className="flex items-center justify-between">
              <h1 className="text-4xl font-semibold text-[#97c3e9] group-hover:text-[#def38b]">
                ({item.id})
              </h1>
              <div  className="flex h-14 w-14 rotate-180 items-center justify-center rounded-full border-2 border-[#97c3e9] bg-[#97c3e9] group-hover:border-[#97c3e9] group-hover:bg-[#def38b]">
                <img className="h-10 w-10" src={isLess} alt="right arrow" />
              </div>
            </motion.div>
            <motion.h1 variants={itemVariants} className="pt-14 text-4xl font-semibold uppercase">
              {item.title}
            </motion.h1>
            <motion.p variants={itemVariants} className="pt-5 text-base leading-relaxed text-[#49494a]">
              {item.para}
            </motion.p>
          </div>
        ))}
      </motion.div>

      {/* Second Part */}
      <div
        
        className="mt-20 rounded-3xl bg-[#def38b] px-4 text-[#49494a] md:px-16">
        <div className="flex flex-col gap-10 py-10 lg:flex-row">
          {/* Logo and Description */}
          <div className="w-full lg:w-2/5">
            <img className="object-cover" src={logo} alt="logo" />
            <p  className="pt-5 capitalize">
              Synthetix is a derivatives liquidity protocol providing the
              backbone for derivatives trading in DeFi, allowing anyone,
              anywhere to gain on-chain exposure.
            </p>
          </div>

          {/* Navigation Links */}
          {[
            { title: "Home", items: footHome },
            { title: "About", items: footAbout },
          ].map((section, idx) => (
            <div key={idx} className="cursor-pointer lg:px-4">
              <h3 className="pb-2 uppercase text-black">{section.title}</h3>
              <ul className="flex flex-col">
                {section.items.map((item, index) => (
                  <a
                    className="transition-all duration-200 ease-in-out hover:scale-105"
                    key={index}
                    href={item.link}
                  >
                    {item.title}
                  </a>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h1 className="text-lg">Newsletter</h1>
            <div className="flex items-center gap-4 py-2">
              <img className="h-6 w-6" src={email} alt="mail" />
              <input
                className="border-b-2 border-[#151617] bg-transparent px-1 py-1 text-[#151617] placeholder-black focus:outline-none"
                type="email"
                name="email"
                placeholder="Enter your mail id"
              />
              <div className="-ml-5 flex h-10 w-10 items-center justify-center rounded-3xl border-[#151617] hover:cursor-pointer hover:border-2">
                <img className="h-6 w-6" src={rightArrow} alt="right arrow" />
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h1 className="py-2 text-lg">Follow Us</h1>
              <div className="flex space-x-4">
                {icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon.src}
                    alt={icon.alt}
                    className="h-12 w-12 cursor-pointer rounded-full border-2 border-[#4e4e4f] px-2 py-1 transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-lg"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex items-center justify-center border-t-2 border-[#4e4e4f] pb-5 pt-2">
          <h3 className="text-center text-lg">
            Synthetix © 2024. All Rights Reserved
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
