import whiteLogo from "../../assets/images/azk-logo-branco.svg";
import LoginButton from "./LoginButton";

const Login = () => {
  return (
    <div className="w-full self-center mx-auto">
      <main className="max-w-[900px] rounded-2xl bg-white flex mx-auto shadow-2xl shadow-gray-200 items-center">
        <div className="w-1/2 bg-liquid rounded-l-2xl flex flex-col items-center py-64">
          <img src={whiteLogo} alt="" className="w-48" />
          <p className=" text-xl pt-2 italic text-white">Don't miss a task.</p>
        </div>
        <div className="w-1/2 flex flex-wrap h-min px-10">
            <h1>Sign In or Sign Up</h1>
            <p className="text-gray-400 mt-2 mb-3">If you don’t have an account, just select one of the options below and create one.</p>
            <LoginButton type="Google"/>
            <LoginButton type="Facebook"/>
        </div>
      </main>
      <p className="text-gray-400 text-center mt-3 max-w-[500px] mx-auto">azk• is a task management tool. Use it to keep track of how much time you spent working for each of your clients.</p>
    </div>
  );
};

export default Login;
