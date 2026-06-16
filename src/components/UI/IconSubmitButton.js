import SubmitIcon from "../../assets/images/icons/submit.svg";

const IconSubmitButton = ({ className = "" }) => {
  return (
    <button type="submit" className={`px-4 ${className}`.trim()} aria-label="Submit">
      <img src={SubmitIcon} className="h-7 w-7" alt="" />
    </button>
  );
};

export default IconSubmitButton;
