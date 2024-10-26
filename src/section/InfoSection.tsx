import { InfoImg1, InfoImg2, InfoMain } from "../assets/images";
import Button from "../components/button";

const InfoSection = () => {
  return (
    <div className="relative z-20 hidden md:block">
      {/* First Part */}
      <div className="absolute z-20 flex justify-between py-20">
        {/* Heading (Left Part) */}
        <div>
          <h1 className="text-balance font-semibold uppercase tracking-tight md:w-60 lg:w-full lg:text-[4rem] lg:leading-[4rem]">
            Staking collateral with <br />
            synthetix helps support <br />
            deep liquidity...
          </h1>
          <Button
            label="Start Staking"
            className="mt-5 gap-4 border-2 border-[#5e5e5f] bg-white font-medium text-black lg:mt-10 lg:gap-8"
          />
        </div>

        {/* Images and Description (Right Part) */}
        <div className="space-y-4 lg:w-1/3">
          <div className="flex justify-end gap-4 px-2 lg:gap-8">
            {[InfoImg1, InfoImg2].map((imgSrc, index) => (
              <img
                key={index}
                className="w-24 rounded-2xl object-cover lg:h-32 lg:w-44"
                src={imgSrc}
                alt={`img${index + 1}`}
              />
            ))}
          </div>
          <p className="text-balance px-2 text-end indent-20 text-sm leading-normal tracking-wide text-[#49494a] lg:text-xl">
            Synthetix provides liquidity for permissionless derivatives like
            perpetual futures. Stakers get rewarded for helping to support a
            more robust ecosystem.
          </p>
        </div>
      </div>

      {/* Second Part */}
      <div className="absolute left-14 top-28 z-10 flex items-center justify-center lg:left-0 lg:top-24">
        {/* Circle Container */}
        <div className="relative flex h-[30rem] w-[30rem] items-center justify-center rounded-full border-8 lg:h-[80rem] lg:w-[80rem]">
          {/* Inner Stats */}
          {[
            {
              title: "All Time Volume",
              value: "$26.5B",
              color: "#def38b",
              position: "lg:top-80 -left-8",
            },
            {
              title: "Market",
              value: "52",
              color: "#97c3e9",
              position: "lg:top-96 -right-14",
            },
            {
              title: "Unique Trading Accounts",
              value: "15,196",
              color: "#def38b",
              position: "-bottom-10 lg:bottom-2 right-20 lg:right-32",
            },
            {
              title: "Unique Stakers",
              value: "44,377",
              color: "#97c3e9",
              position: "bottom-10 lg:bottom-36 lg:left-60 left-24",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`absolute flex h-24 w-24 flex-col items-center justify-center rounded-full border-4 lg:h-48 lg:w-48 lg:border-8 ${item.position} lg:space-y-5`}
            >
              <h3
                className={`text-center text-sm uppercase lg:text-xl ${item.title !== "Unique Trading Accounts" ? "lg:whitespace-nowrap" : ""} `}
              >
                {item.title}
              </h3>
              <p className={`text-xl lg:text-5xl text-[${item.color}]`}>
                {item.value}
              </p>
            </div>
          ))}

          {/* Main Circle Image */}
          <div className="flex h-[20rem] w-[20rem] items-center justify-center rounded-full border-8 lg:h-[60rem] lg:w-[60rem]">
            <div className="flex h-[15rem] w-[15rem] items-center justify-center rounded-full bg-blue-400 lg:h-[40rem] lg:w-[40rem]">
              <img
                className="h-full w-full rounded-full object-cover"
                src={InfoMain}
                alt="mainImg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
