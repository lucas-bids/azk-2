import whiteLogo from "../../assets/images/azk-logo-branco.svg";
import LoginButton from "./LoginButton";

const Login = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-10">
      <div className="w-full max-w-[1200px]">
        <main className="mx-auto flex max-w-[1110px] rounded-[30px] bg-white shadow-2xl shadow-gray-200">
          <div className="hidden w-1/2 rounded-l-[30px] bg-liquid bg-cover bg-center md:flex md:flex-col md:items-center md:justify-center md:py-56">
            <img src={whiteLogo} alt="" className="w-56" />
            <p className="pt-4 text-2xl italic text-white">Don’t miss a task.</p>
          </div>
          <div className="flex w-full flex-wrap px-8 py-16 md:w-1/2 md:px-14">
            <h1 className="text-5xl font-medium text-gray-700">Sign in or sign up</h1>
            <p className="mb-8 mt-4 max-w-[420px] text-2xl text-gray-400">
              If you don’t have an account, just select one of the options below and create one.
            </p>
            <LoginButton type="Google" />
            <LoginButton type="Facebook" />
          </div>
        </main>
        <p className="mx-auto mt-6 max-w-[700px] text-center text-2xl text-gray-400">
          azk• is a task management tool. Use it to keep track of how much time you spent working for each of your clients.
        </p>
      </div>
    </div>
  );
};

export default Login;
