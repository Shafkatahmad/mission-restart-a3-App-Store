import { Link, useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();
  console.log(apps);
  console.log(id);
  const app = apps.find((app) => app.id === Number(id));
  console.log(app);
  const {
    image,
    title,
    description,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
  } = app;
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row gap-10">
        <figure className="max-w-75">
          <img className="w-full object-cover" src={image} alt="" />
        </figure>
        <div>
          <h3 className="text-3xl font-bold">
            {title}: {description}
          </h3>
          <p className="text-xl font-semibold text-[#627382] mb-7.5">
            Developed by{" "}
            <span className="text-gradient-purple">{companyName}</span>
          </p>
          <hr className="mb-7.5" />
          <div className="flex gap-10 mb-7.5">
            <div>
              <img src={downloadIcon} alt="" />
              <p>Downloads</p>
              <h3 className="text-4xl font-extrabold">
                {new Intl.NumberFormat("en", { notation: "compact" }).format(
                  downloads,
                )}
              </h3>
            </div>
            <div>
              <img src={ratingIcon} alt="" />
              <p>Average Ratings</p>
              <h3 className="text-4xl font-extrabold">{ratingAvg}</h3>
            </div>
            <div>
              <img src={reviewIcon} alt="" />
              <p>Total Reviews</p>
              <h3 className="text-4xl font-extrabold">
                {new Intl.NumberFormat("en", { notation: "compact" }).format(
                  reviews,
                )}
              </h3>
            </div>
          </div>
          <Link>
            <button className="px-5 py-3 bg-[#00D390] rounded-sm text-xl font-semibold text-white">
              Install Now {size}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
