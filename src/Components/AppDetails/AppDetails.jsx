import { Link, useLoaderData, useParams } from "react-router";
import downloadIcon from "../../assets/icon-downloads.png";
import ratingIcon from "../../assets/icon-ratings.png";
import reviewIcon from "../../assets/icon-review.png";
import {
  appInstalled,
  addToStoredAppList,
} from "../../utilities/installToLocal";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

// Register chart components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const AppDetails = () => {
  const { id } = useParams();
  const apps = useLoaderData();

  const app = apps.find((app) => app.id === Number(id));

  const handleInstal = (id) => {
    addToStoredAppList(id);
  };

  const {
    image,
    title,
    description,
    companyName,
    downloads,
    ratingAvg,
    reviews,
    size,
    ratings,
  } = app;

  // Chart labels and values
  const labels = ratings.map((r) => r.name);
  const counts = ratings.map((r) => r.count);

  const data = {
    labels: labels,
    datasets: [
      {
        axis: "y",
        label: "Rating Count",
        data: counts,
        backgroundColor: [
          "rgba(239,68,68,0.5)",
          "rgba(249,115,22,0.5)",
          "rgba(234,179,8,0.5)",
          "rgba(34,197,94,0.5)",
          "rgba(124,58,237,0.5)",
        ],
        borderColor: [
          "rgb(239,68,68)",
          "rgb(249,115,22)",
          "rgb(234,179,8)",
          "rgb(34,197,94)",
          "rgb(124,58,237)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return new Intl.NumberFormat().format(context.raw);
          },
        },
      },
    },
  };

  return (
    <div className="w-11/12 mx-auto py-10">
      {/* App Info */}
      <div className="flex flex-col md:flex-row gap-10 mb-12">
        <figure className="max-w-75">
          <img className="w-full object-cover" src={image} alt={title} />
        </figure>

        <div>
          <h3 className="text-3xl font-bold mb-2">
            {title}: {description}
          </h3>

          <p className="text-xl font-semibold text-[#627382] mb-7.5">
            Developed by <span className="text-purple-600">{companyName}</span>
          </p>

          <hr className="mb-7.5" />

          {/* Stats */}
          <div className="flex gap-10 mb-7.5 flex-wrap">
            <div>
              <img src={downloadIcon} alt="downloads" />
              <p>Downloads</p>
              <h3 className="text-4xl font-extrabold">
                {new Intl.NumberFormat("en", {
                  notation: "compact",
                }).format(downloads)}
              </h3>
            </div>

            <div>
              <img src={ratingIcon} alt="rating" />
              <p>Average Ratings</p>
              <h3 className="text-4xl font-extrabold">{ratingAvg}</h3>
            </div>

            <div>
              <img src={reviewIcon} alt="reviews" />
              <p>Total Reviews</p>
              <h3 className="text-4xl font-extrabold">
                {new Intl.NumberFormat("en", {
                  notation: "compact",
                }).format(reviews)}
              </h3>
            </div>
          </div>

          <Link>
            <button
              disabled={appInstalled(id)}
              onClick={() => handleInstal(id)}
              className="px-5 py-3 bg-[#00D390] rounded-sm text-xl font-semibold text-white cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {appInstalled(id) ? "Installed" : `Install Now (${size} MB)`}
            </button>
          </Link>
        </div>
      </div>

      {/* Rating Chart */}
      <div className="max-w-4xl mb-4">
        <h3 className="text-2xl font-bold mb-6">Ratings</h3>
        <Bar data={data} options={options} />
      </div>

      <div>
        <h3 className="text-2xl font-semibold mb-6">Description</h3>
        <p className="text-xl text-[#627382]">{description}</p>
      </div>
    </div>
  );
};

export default AppDetails;
