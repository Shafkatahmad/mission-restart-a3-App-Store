import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import errorApp from "../../assets/App-Error.png";
import { useNavigate } from "react-router";

const ErrorApp = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="p-20 bg-base-300 flex flex-col items-center justify-center text-center">
        <figure className="mb-4">
          <img src={errorApp} alt="" />
        </figure>

        <h3 className="text-5xl font-semibold mb-2">OPPS!! APP NOT FOUND</h3>
        <p className="text-xl text-[#627382] mb-4">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <button
          onClick={() => navigate(-1)}
          className="gradient-primary px-10 py-4 text-white cursor-pointer rounded-sm"
        >
          Go Back!
        </button>
      </div>
    </div>
  );
};

export default ErrorApp;
