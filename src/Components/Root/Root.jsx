import { Outlet } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>

      {/* react toastify */}
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
};

export default Root;
