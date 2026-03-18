import { FaStar } from "react-icons/fa";
import { RiDownload2Line } from "react-icons/ri";
import { Link } from "react-router";

const SingleApp = ({ app }) => {
  const { id, image, title, downloads, ratings } = app;
  return (
    <Link to={`/app/${id}`}>
      <div className="p-4">
        <div>
          <figure className="mb-4 ">
            <img className="object-cover" src={image} alt="" />
          </figure>
          <div className="flex items-center justify-center gap-2 border border-red-700 mb-4">
            <h6 className="text-xl line-clamp-1">{title}: </h6>
            {/* <p className="truncate">{description}</p> */}
          </div>
          <div className="flex justify-between">
            <p className="flex items-center gap-2 bg-[#F1F5E8] text-[#00D390] px-2.5 py-1.5 rounded-sm">
              <RiDownload2Line></RiDownload2Line>
              {new Intl.NumberFormat("en", { notation: "compact" }).format(
                downloads,
              )}
            </p>
            <p className="flex items-center gap-2 bg-[#FFF0E1] text-[#FF8811] px-2.5 py-1.5 rounded-sm">
              <FaStar></FaStar>
              {ratings.length}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;
