import purpleLogo from "../../assets/images/azk-logo.svg";
import homeIcon from "../../assets/images/icons/home.svg";
import clientsIcon from "../../assets/images/icons/clients.svg";
import reportsIcon from "../../assets/images/icons/reports.svg";
import logoutIcon from "../../assets/images/icons/log-out.svg";

import homeIconGray from "../../assets/images/icons/home-gray.svg";
import clientsIconGray from "../../assets/images/icons/clients-gray.svg";
import reportsIconGray from "../../assets/images/icons/reports-gray.svg";

import { NavLink } from "react-router-dom";

const navLinkClass = "block p-3";

const MenuBar = () => {
  return (
    <div className="hidden w-[104px] shrink-0 justify-center lg:flex">
      <div className="w-full p-2">
        <nav className="flex h-full min-h-[calc(100vh-16px)] flex-col items-center justify-between rounded-[24px] bg-white px-4 py-6 shadow dark:bg-slate-900">
          <NavLink to="/dashboard" className="block" aria-label="Home">
            <img className="w-14" src={purpleLogo} alt="azk home" />
          </NavLink>
          <div className="flex flex-col">
            <NavLink to="/dashboard" className={navLinkClass} aria-label="Tasks">
              {({ isActive }) => (
                <img
                  className="w-8"
                  src={isActive ? homeIcon : homeIconGray}
                  alt=""
                />
              )}
            </NavLink>
            <NavLink to="/clients" className={navLinkClass} aria-label="Clients">
              {({ isActive }) => (
                <img
                  className="w-8"
                  src={isActive ? clientsIcon : clientsIconGray}
                  alt=""
                />
              )}
            </NavLink>
            <NavLink to="/reports" className={navLinkClass} aria-label="Reports">
              {({ isActive }) => (
                <img
                  className="w-8"
                  src={isActive ? reportsIcon : reportsIconGray}
                  alt=""
                />
              )}
            </NavLink>
          </div>
          <NavLink to="/" className={navLinkClass} aria-label="Log out">
            <img className="w-8 pb-0" src={logoutIcon} alt="" />
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default MenuBar;
