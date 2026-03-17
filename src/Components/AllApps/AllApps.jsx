import { useLoaderData } from "react-router";
import SingleApp from "../SingleApp/SingleApp";
import { useState } from "react";

const AllApps = () => {
  const [search, setSearch] = useState("");
  const apps = useLoaderData();
  // console.log(apps);
  const [updatedApps, setUpdatedApps] = useState(apps);

  const handleChange = (e) => {
    console.log(e.target.value);
    const value = e.target.value;
    setSearch(value);
    const newApps = apps.filter((app) =>
      app.title.toLowerCase().includes(value.toLowerCase()),
    );
    // setUpdatedApps(newApps);
    search.length === 0 ? setUpdatedApps(apps) : setUpdatedApps(newApps);
  };
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold mb-4">Our All Applications</h2>
          <p className="text-[#627382]">
            Explore All Apps on the Market developed by us. We code for Millions
          </p>
        </div>

        <div className="flex justify-between mb-4">
          <h3 className="text-2xl font-semibold">
            ({updatedApps.length}) Apps Found
          </h3>
          <form>
            <input
              className="text-[#627382] border border-[#b7b6b6] w-50 px-4 py-3 rounded-sm"
              placeholder="search apps"
              onChange={handleChange}
              value={search}
              name="search"
              type="text"
            />
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {updatedApps.length === 0 ? (
            <h2 className="text-xl font-semibold col-span-full text-center">
              No App Found
            </h2>
          ) : (
            updatedApps.map((app) => (
              <SingleApp key={app.id} app={app}></SingleApp>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AllApps;
