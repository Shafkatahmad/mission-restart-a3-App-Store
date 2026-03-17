import { FaCaretDown } from "react-icons/fa";
import {
  getStoredAppledList,
  removeAppFromLocalStorage,
} from "../../utilities/installToLocal";
import { useLoaderData } from "react-router";
import InstalledApp from "./InstalledApp";
import { useState } from "react";

const InstalledAppContainer = () => {
  const [sort, setSort] = useState("");
  const [refresh, setRefresh] = useState(0); // 🔥 trigger re-render

  const apps = useLoaderData();

  // 🔹 Get installed app IDs from localStorage
  const appInstalledStr = getStoredAppledList();
  const appsInstalled = appInstalledStr.map((id) => parseInt(id));

  // 🔹 Filter installed apps
  const installedApps = apps.filter((app) => appsInstalled.includes(app.id));

  // 🔹 Sort logic (derived)
  const sortedApps = [...installedApps].sort((a, b) => {
    if (sort === "High-Low") return b.downloads - a.downloads;
    if (sort === "Low-High") return a.downloads - b.downloads;
    return 0;
  });

  // 🔹 Handle uninstall
  const handleUnInstall = (id) => {
    removeAppFromLocalStorage(id);
    setRefresh((prev) => prev + 1); // 🔥 force re-render
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

          {/* 🔽 Sort Dropdown */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn font-normal text-[#627382] m-1"
            >
              {sort ? `Sorted: ${sort}` : "Sort By Downloads"} <FaCaretDown />
            </div>

            <ul
              tabIndex={-1}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 shadow-sm"
            >
              <li onClick={() => setSort("High-Low")}>
                <a>High → Low</a>
              </li>
              <li onClick={() => setSort("Low-High")}>
                <a>Low → High</a>
              </li>
            </ul>
          </div>
        </div>

        {/* 🔹 Installed Apps List */}
        <div>
          {sortedApps.length === 0 ? (
            <p className="text-center text-xl text-gray-500">
              No apps installed
            </p>
          ) : (
            sortedApps.map((installApp) => (
              <InstalledApp
                key={installApp.id}
                installApp={installApp}
                handleUnInstall={handleUnInstall}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default InstalledAppContainer;
