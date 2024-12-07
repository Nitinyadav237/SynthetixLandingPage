import { github, linkedin, telegram } from "../src/assets/svg";

export const navLinks = ["Perps", "Governance", "Docs"];
export const icons = [
  { src: telegram, alt: "telegram" },
  { src: github, alt: "github" },
  { src: linkedin, alt: "linkedin" },
];

export const EcoCard = [
  {
    id: 1,
    image: "src/assets/images/Eco2.png",
    color: "bg-[#1e80e2]",
    title: "Kwenta",
    sub: "Trade Crypto, Forex, and commodities with up to 50x leverage and deep liquidity",
    text: "Perps",
  },
  {
    id: 2,
    image: "src/assets/images/Eco3.png",
    color: "bg-[#00a2d3]",
    title: "Aave",
    sub: "Borrow and lend crypto assets with ease using Aave's decentralized liquidity protocol",
    text: "Lending",
  },
  {
    id: 3,
    image: "src/assets/images/Eco4.png",
    color: "bg-[#06b898]",
    title: "Uniswap",
    sub: "Swap tokens seamlessly with low fees on the largest decentralized exchange",
    text: "DEX",
  },
  {
    id: 4,
    image: "src/assets/images/Eco5.png",
    color: "bg-[#151617]",
    title: "Compound",
    sub: "Earn interest on your crypto assets by supplying them to Compound's protocol",
    text: "Interest",
  },
];

export const cardInfo = [
  {
    id: "01",
    title: "Staking Interface V2",
    para: "Stake your collateral via the Synthetix Staking Dapp to provide liquidity to the Synthetix Ecosystem. Earn weekly inflation incentives and fees generated from your liquidity.",
  },
  {
    id: "02",
    title: "Staking Interface V3",
    para: "V3 Staking is now live. Provide liquidity directly to the V3 system with greater flexibility over which pools and markets you have exposure to.",
  },
  {
    id: "03",
    title: "Synthetix Staking Guide",
    para: "Learn more about the mechanics of staking with Synthetix. Staked collateral underwrites the liquidity of the protocol and powers our ecosystem. Stakers are rewarded.",
  },
];

export const footHome = [
  {
    title: "Perps",
    link: "/",
  },
  {
    title: "Governance",
    link: "/",
  },
  {
    title: "Docs",
    link: "/",
  },
  {
    title: "Blog",
    link: "/",
  },
  {
    title: "Stats",
    link: "/",
  },
];

export const footAbout = [
  {
    title: "Careers",
    link: "/",
  },
  {
    title: "Brands Assets",
    link: "/",
  },
  {
    title: "Terms And Condition",
    link: "/",
  },
  {
    title: "Community",
    link: "/",
  },
];
