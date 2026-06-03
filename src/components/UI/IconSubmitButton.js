import SubmitIcon from "../../assets/images/icons/submit.svg";

const IconSubmitButton = ({ className = "" }) => {
  return (
    <button type="submit" className={`px-6 ${className}`.trim()} aria-label="Submit">
      <img src={SubmitIcon} className="h-11 w-11" alt="" />
    </button>
  );
};

export default IconSubmitButton;
