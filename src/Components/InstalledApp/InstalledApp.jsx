import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
const InstalledApp = ({ installApp }) => {
  const { image, title, description, downloads, ratingAvg, size } = installApp;
  return (
    <div className="p-4 bg-white mb-4 rounded-sm">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <figure className="w-20">
            <img className="w-full object-cover" src={image} alt="" />
          </figure>

          <div className="flex flex-col">
            <div className="mb-4 border border-blue-700">
              <h4 className="text-xl font-semibold">
                {title}: {description}
              </h4>
            </div>

            <div className="flex gap-4 border border-red-700">
              <div className="flex gap-1 items-center text-[#00D390]">
                <img className="w-4 h-4" src={downloadIcon} alt="" />
                <p>
                  {new Intl.NumberFormat("en", {
                    notation: "compact",
                  }).format(downloads)}
                </p>
              </div>

              <div className="flex gap-1 items-center text-[#FF8811]">
                <img className="w-4 h-4" src={ratingIcon} alt="" />
                <p>
                  {new Intl.NumberFormat("en", {
                    notation: "compact",
                  }).format(ratingAvg)}
                </p>
              </div>

              <div>
                <p className="text-[#627382]">{size} MB</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="font-semibold px-4 py-3 bg-[#00D390] cursor-pointer rounded-sm">
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstalledApp;
