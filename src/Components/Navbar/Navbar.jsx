import { Link, NavLink } from "react-router";
import logo from "../../assets/logo (1).png";
import "./Navbar.css";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  const links = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink>Apps</NavLink>
      <NavLink to="/installedApps">Installation</NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100 w-11/12 mx-auto mb-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="flex items-center">
          <img className="w-10" src={logo} alt="" />
          <a className="text-xl font-bold bg-linear-to-br from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Hero.IO
          </a>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 w-55 justify-between ">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <Link clLinkssName="btn">
          <div className="flex items-center gap-2 bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-4 py-3 rounded-sm">
            <FaGithub></FaGithub> Contribute
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
