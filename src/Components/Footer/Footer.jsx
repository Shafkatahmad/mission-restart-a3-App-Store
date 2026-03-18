import { FaFacebook, FaLinkedin } from "react-icons/fa";
import logo from "../../assets/logo (1).png";
import { FaSquareTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className=" mx-auto bg-[#001931] text-white py-4">
      <div className="flex justify-around">
        <div className="flex items-center">
          <img className="w-10" src={logo} alt="" />
          <a className="text-xl font-bold bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Hero.IO
          </a>
        </div>
        <div>
          <p className="">Social Links</p>
          <div className="flex gap-4">
            <FaLinkedin className="text-xl"></FaLinkedin>
            <FaSquareTwitter className="text-xl"></FaSquareTwitter>
            <FaFacebook className="text-xl"></FaFacebook>
          </div>
        </div>
      </div>

      <footer className="footer sm:footer-horizontal w-11/12 justify-around mx-auto bg-[#001931] text-white p-10 mb-4">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      <hr className="w-11/12 mx-auto mb-4" />
      <p className="text-center">Copyright © 2025 - All right reserved</p>
    </div>
  );
};

export default Footer;
