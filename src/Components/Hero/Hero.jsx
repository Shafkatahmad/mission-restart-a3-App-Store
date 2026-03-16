import { FaAppStore, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router";
import hero from "../../assets/hero.png";
import TrendProducts from "../TrendProducts/TrendProducts";

const Hero = () => {
  return (
    <div className="mb-20">
      <div className="max-w-170 text-center mx-auto">
        <h1 className="text-[72px] font-black mb-4">
          We Build <span className="text-gradient-purple">Productive</span> Apps
        </h1>
        <p className="text-[#627382] mb-10">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="mb-10">
          <Link className="flex gap-4 justify-center">
            <button className="flex items-center gap-2 border border-[#D2D2D2] rounded-sm px-5 py-4">
              <FaGooglePlay></FaGooglePlay> Google Play
            </button>
            <button className="flex items-center gap-2 border border-[#D2D2D2] rounded-sm px-5 py-4">
              <FaAppStore></FaAppStore> App Store
            </button>
          </Link>
        </div>
        <figure>
          <img src={hero} alt="" />
        </figure>
      </div>

      <div className="bg-linear-to-br from-[#632EE3] to-[#9F62F2]  py-20">
        <div className="w-11/12 mx-auto text-center">
          <h3 className="text-5xl text-white font-bold mb-10">
            Trusted by Millions, Built for You
          </h3>
          <div className="flex flex-col lg:flex-row gap-6 justify-center">
            <div>
              <p className="text-white/80">Total Downloads</p>
              <h2 className="text-white text-[56px] font-extrabold">29.6M</h2>
              <p className="text-white/80">21% more than last month</p>
            </div>
            <div>
              <p className="text-white/80">Total Downloads</p>
              <h2 className="text-white text-[56px] font-extrabold">29.6M</h2>
              <p className="text-white/80">21% more than last month</p>
            </div>
            <div>
              <p className="text-white/80">Total Downloads</p>
              <h2 className="text-white text-[56px] font-extrabold">29.6M</h2>
              <p className="text-white/80">21% more than last month</p>
            </div>
          </div>
        </div>
      </div>
      <TrendProducts></TrendProducts>
    </div>
  );
};

export default Hero;
