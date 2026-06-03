import purpleLogo from "../../assets/images/azk-logo.svg";
import homeIcon from "../../assets/images/icons/home.svg";
import clientsIcon from "../../assets/images/icons/clients.svg";
import reportsIcon from "../../assets/images/icons/reports.svg";
import logoutIcon from "../../assets/images/icons/log-out.svg";

import homeIconGray from "../../assets/images/icons/home-gray.svg";
import clientsIconGray from "../../assets/images/icons/clients-gray.svg";
import reportsIconGray from "../../assets/images/icons/reports-gray.svg";

import { NavLink } from "react-router-dom";

const navLinkClass = "block p-4";

const MenuBar = () => {
  return (
    <div className="hidden w-[130px] shrink-0 justify-center lg:flex">
      <div className="w-full p-3">
        <nav className="flex h-full min-h-[calc(100vh-24px)] flex-col items-center justify-between rounded-[30px] bg-white px-6 py-8 shadow">
          <NavLink to="/dashboard" className={navLinkClass} aria-label="Home">
            <img className="w-20" src={purpleLogo} alt="azk home" />
          </NavLink>
          <div className="flex flex-col">
            <NavLink to="/dashboard" className={navLinkClass} aria-label="Tasks">
              {({ isActive }) => (
                <img
                  className="w-18"
                  src={isActive ? homeIcon : homeIconGray}
                  alt=""
                />
              )}
            </NavLink>
            <NavLink to="/clients" className={navLinkClass} aria-label="Clients">
              {({ isActive }) => (
                <img
                  className="w-18"
                  src={isActive ? clientsIcon : clientsIconGray}
                  alt=""
                />
              )}
            </NavLink>
            <NavLink to="/reports" className={navLinkClass} aria-label="Reports">
              {({ isActive }) => (
                <img
                  className="w-18"
                  src={isActive ? reportsIcon : reportsIconGray}
                  alt=""
                />
              )}
            </NavLink>
          </div>
          <NavLink to="/" className={navLinkClass} aria-label="Log out">
            <img className="w-18 pb-0" src={logoutIcon} alt="" />
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default MenuBar;
