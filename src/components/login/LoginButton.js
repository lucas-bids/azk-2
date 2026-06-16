import GoogleLogo from "../../assets/images/google-logo.svg";
import FacebookLogo from "../../assets/images/facebook-logo.svg";
import { useNavigate } from "react-router-dom";

const LoginButton = ({ type, disabled = false }) => {
  const navigate = useNavigate();
  const isGoogle = type === "Google";
  const isFacebook = type === "Facebook";
  const isGuest = type === "Guest";
  const buttonLabel = isGuest ? "Continue as a guest" : `Sign in with ${type}`;

  const buttonClassName = isGuest
    ? "bg-gray-700 border-gray-700 hover:bg-gray-800 text-white"
    : disabled
      ? "cursor-not-allowed border-gray-200 bg-gray-100 text-gray-400 shadow-none"
      : isGoogle
        ? "border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
        : "border-transparent bg-[#1877F2] text-white hover:bg-[#1469D6]";

  const logoClassName = disabled ? "opacity-50 grayscale" : "";

  return (
    <button
      type="button"
      onClick={disabled ? undefined : () => navigate("/dashboard")}
      disabled={disabled}
      aria-disabled={disabled}
      className={`flex h-10 w-full max-w-[360px] items-center justify-center rounded-md border px-5 shadow-sm transition-colors ${buttonClassName}`}
    >
      {!isGuest ? (
        <img
          src={isGoogle ? GoogleLogo : FacebookLogo}
          alt={`${type} Logo`}
          className={logoClassName}
        />
      ) : null}
      <p className={`${isGuest ? "" : "pl-3"} text-sm font-medium`}>{buttonLabel}</p>
    </button>
  );
};

export default LoginButton;
