import GoogleLogo from "../../assets/images/google-logo.svg";
import FacebookLogo from "../../assets/images/facebook-logo.svg";
import { useNavigate } from "react-router-dom";

const LoginButton = (props) => {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      onClick={() => navigate("/dashboard")}
      className={`mt-3 flex h-min w-full max-w-[440px] items-center justify-center rounded-2xl border px-6 py-4 shadow-sm ${
        props.type === "Google"
          ? "bg-white border-gray-300 hover:bg-gray-50"
          : "bg-[#1877F2] hover:bg-[#1469D6] text-white"
      }`}
    >
      <img
        src={props.type === "Google" ? GoogleLogo : FacebookLogo}
        alt={`${props.type} Logo`}
      />
      <p className="pl-5 text-2xl font-normal">Sign in with {props.type}</p>
    </button>
  );
};

export default LoginButton;
