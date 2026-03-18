import { Link, useNavigate } from "react-router";
import errorPhoto from "../../assets/error-404.png";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar></Navbar>

      <div className="p-20 bg-base-300 flex flex-col items-center justify-center text-center">
        <figure className="mb-4">
          <img src={errorPhoto} alt="" />
        </figure>

        <h3 className="text-5xl font-semibold mb-2">Oops, page not found!</h3>
        <p className="text-xl text-[#627382] mb-4">
          The page you are looking for is not available.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="gradient-primary px-10 py-4 text-white cursor-pointer rounded-sm"
        >
          Go Back!
        </button>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default Error404;
