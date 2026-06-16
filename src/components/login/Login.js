import whiteLogo from "../../assets/images/azk-logo-branco.svg";
import LoginButton from "./LoginButton";

const Login = () => {
  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4 py-10">
      <div className="w-full max-w-[1040px]">
        <main className="mx-auto flex max-w-[960px] rounded-[24px] bg-white shadow-2xl shadow-gray-200  min-h-[600px]">
          <div className="hidden w-1/2 rounded-l-[24px] bg-liquid bg-cover bg-center md:flex md:flex-col md:items-center md:justify-center md:py-40">
            <img src={whiteLogo} alt="" className="w-44" />
            <p className="pt-3 text-base text-white">Don’t miss a task.</p>
          </div>
          <div className="flex w-full flex-col justify-center px-8 py-12 md:w-1/2 md:px-12">
            <h1 className="text-[30px] font-medium text-gray-700">Sign in or sign up</h1>
            <p className="mb-6 mt-3 max-w-[380px] text-sm text-gray-400">
              If you don’t have an account, just select one of the options below and create one.
            </p>
            <div className="flex flex-col gap-3">
              <LoginButton type="Google" />
              <LoginButton type="Facebook" />
            </div>
          </div>
        </main>
        <p className="mx-auto mt-5 max-w-[620px] text-center text-sm text-gray-400">
          azk• is a task management tool. Use it to keep track of how much time you spent working for each of your clients.
        </p>
      </div>
    </div>
  );
};

export default Login;
