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
    <div className="w-1/12 flex justify-center">
      <div className="p-3 h-[800px] w-fit">
        <nav className=" bg-white rounded-2xl shadow h-full flex flex-col justify-between items-center">
          <NavLink to="/tasks">
            <button>
              <img className="w-20 p-4" src={purpleLogo} alt="" />
            </button>
          </NavLink>
          <div className="flex flex-col">
            <NavLink to="/tasks">
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
          <button>
            <img className="w-18 p-4" src={logoutIcon} alt="" />
          </button>
        </nav>
      </div>
    </div>
  );
};

export default MenuBar;
