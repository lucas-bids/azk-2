import GoogleLogo from "../../assets/images/google-logo.svg";
import FacebookLogo from "../../assets/images/facebook-logo.svg";

const LoginButton = (props) => {
  return (
    <button
      type="button"
      className={`flex mt-3 shadow-sm justify-center items-center w-full max-w-[400px] h-min py-3 px-6 border rounded-lg ${
        props.type === "Google"
          ? "bg-white border-gray-300 hover:bg-gray-50"
          : "bg-[#1877F2] hover:bg-[#1469D6] text-white"
      }`}
    >
      <img
        src={props.type === "Google" ? GoogleLogo : FacebookLogo}
        alt={`${props.type} Logo`}
      />
      <p className="pl-3 font-normal">Sign in with {props.type}</p>
    </button>
  );
};

export default LoginButton;
