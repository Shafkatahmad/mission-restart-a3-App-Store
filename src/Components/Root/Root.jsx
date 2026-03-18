import { Outlet, useNavigation } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { ToastContainer } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

const Root = () => {
  const navigation = useNavigation();

  return (
    <div>
      <Header></Header>
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center h-[50vh]">
          <RotatingLines color="grey"></RotatingLines>
        </div>
      ) : (
        <Outlet></Outlet>
      )}
      <Footer></Footer>

      {/* react toastify */}
      <ToastContainer position="top-center"></ToastContainer>
    </div>
  );
};

export default Root;
