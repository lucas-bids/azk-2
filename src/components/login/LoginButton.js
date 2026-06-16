import GoogleLogo from "../../assets/images/google-logo.svg";
import FacebookLogo from "../../assets/images/facebook-logo.svg";
import { useNavigate } from "react-router-dom";

const LoginButton = (props) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/dashboard")}
      className={`flex h-10 w-full max-w-[360px] items-center justify-center rounded-md border px-5 shadow-sm transition-colors ${
        props.type === "Google"
          ? "bg-white border-gray-300 hover:bg-gray-50 text-gray-700"
          : "bg-[#1877F2] border-transparent hover:bg-[#1469D6] text-white"
      }`}
    >
      <img
        src={props.type === "Google" ? GoogleLogo : FacebookLogo}
        alt={`${props.type} Logo`}
      />
      <p className="pl-3 text-sm font-medium">Sign in with {props.type}</p>
    </button>
  );
};

export default LoginButton;
