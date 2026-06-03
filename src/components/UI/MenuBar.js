import purpleLogo from "../../assets/images/azk-logo.svg";
import homeIcon from "../../assets/images/icons/home.svg";
import clientsIcon from "../../assets/images/icons/clients.svg";
import reportsIcon from "../../assets/images/icons/reports.svg";
import logoutIcon from "../../assets/images/icons/log-out.svg";

import homeIconGray from "../../assets/images/icons/home-gray.svg";
import clientsIconGray from "../../assets/images/icons/clients-gray.svg";
import reportsIconGray from "../../assets/images/icons/reports-gray.svg";

import { NavLink } from "react-router-dom";

const MenuBar = () => {
  return (
    <div className="hidden w-[130px] shrink-0 justify-center lg:flex">
      <div className="w-full p-3">
        <nav className="flex h-full min-h-[calc(100vh-24px)] flex-col items-center justify-between rounded-[30px] bg-white shadow px-6 py-8">
          <NavLink to="/dashboard">
            <button>
              <img className="w-20" src={purpleLogo} alt="" />
            </button>
          </NavLink>
          <div className="flex flex-col">
            <NavLink to="/dashboard">
              {({isActive}) => (
                <img className="w-18 p-4" src={isActive ? homeIcon : homeIconGray} alt="" />
              )
              }
            </NavLink>
            <NavLink to="/clients">
            {({isActive}) => (
                <img className="w-18 p-4" src={isActive ? clientsIcon : clientsIconGray} alt="" />
              )
              }
            </NavLink>
              <NavLink to="/reports">
              {({isActive}) => (
                <img className="w-18 p-4" src={isActive ? reportsIcon : reportsIconGray} alt="" />
              )
              }
              </NavLink>
          </div>
          <NavLink to="/">
            <img className="w-18 p-4 pb-0" src={logoutIcon} alt="" />
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default MenuBar;
