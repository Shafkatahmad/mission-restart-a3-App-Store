import { FaCaretDown } from "react-icons/fa";
import { getStoredAppledList } from "../../utilities/installToLocal";
import { useLoaderData } from "react-router";
import InstalledApp from "./InstalledApp";
import { useEffect, useState } from "react";

const InstalledAppContainer = () => {
  const [appList, setAppList] = useState([]);
  const [sort, setSort] = useState("");

  const apps = useLoaderData();
  const appInstalledStr = getStoredAppledList();
  const appsInstalled = appInstalledStr.map((appId) => parseInt(appId));
  console.log(appsInstalled);

  const installedApps = apps.filter((app) => appsInstalled.includes(app.id));
  console.log(installedApps);
  useEffect(() => {
    if (appList.length === 0) {
      setAppList(installedApps);
    }
  }, [installedApps, appList.length]);

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "High-Low") {
      const sortedAppByHighToLow = [...appList].sort(
        (a, b) => b.downloads - a.downloads,
      );
      setAppList(sortedAppByHighToLow);
    }
    if (sortType === "Low-High") {
      const sortedAppByLowToHigh = [...appList].sort(
        (a, b) => a.downloads - b.downloads,
      );
      setAppList(sortedAppByLowToHigh);
    }
  };

  const handleUnInstall = (id) => {
    const updatedAppList = appList.filter((app) => app.id != id);

    setAppList(updatedAppList);
  };

  return (
    <div className="bg-gray-200 py-20">
      <div className="w-11/12 mx-auto">
        <h3 className="text-5xl font-bold text-center mb-4">
          Your Installed Apps
        </h3>
        <p className="text-xl text-[#627382] text-center mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="flex justify-between mb-4">
          <h5 className="text-2xl font-semibold">
            {installedApps.length} Apps Found
          </h5>
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn font-normal text-[#627382] m-1"
            >
              Sort By Downloads <FaCaretDown></FaCaretDown>
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-26 shadow-sm"
            >
              <li onClick={() => handleSort("High-Low")}>
                <a>High-Low</a>
              </li>
              <li onClick={() => handleSort("Low-High")}>
                <a>Low-High</a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          {appList.map((installApp) => (
            <InstalledApp
              key={installApp.id}
              installApp={installApp}
              handleUnInstall={handleUnInstall}
            ></InstalledApp>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstalledAppContainer;
