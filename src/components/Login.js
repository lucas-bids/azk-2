import { Fragment } from "react";
import whiteLogo from "../assets/images/azk-logo-branco.svg"

const Login = () => {
  return (
    <main className="w-full rounded-2xl bg-white">
      <div className="w-1/2 bg-liquid rounded-l-2xl">
          <img src={whiteLogo} alt="" className="h-60 w-60" />
      </div>
      <div className="w-1/2"></div>
    </main>
  );
};

export default Login;
