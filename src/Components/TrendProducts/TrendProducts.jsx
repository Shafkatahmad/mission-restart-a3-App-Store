import { useEffect, useState } from "react";
import App from "../../App";
import TrendProduct from "../TrendProduct/TrendProduct";
import { Link } from "react-router";

const TrendProducts = () => {
  const [apps, setApps] = useState([]);
  useEffect(() => {
    fetch("./appData.json")
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-20 mb-20">
        <h3 className="text-[48px] font-bold mb-4 leading-9">Trending Apps</h3>
        <p className="text-black/60">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-11/12 mx-auto mb-10">
        {apps.slice(0, 8).map((app) => (
          <TrendProduct key={app.id} app={app}></TrendProduct>
        ))}
      </div>
      <div className="w-11/12 mx-auto text-center">
        <Link to="/allApps">
          <button className="gradient-primary text-white font-semibold cursor-pointer px-10 py-4 rounded-sm">
            Show All
          </button>
        </Link>
      </div>
    </div>
  );
};

export default TrendProducts;
