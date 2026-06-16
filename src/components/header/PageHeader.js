import DarkMode from "../login/DarkMode";

const titleSizeClass = {
  default: "text-[30px]",
  large: "text-[32px]",
};

const PageHeader = ({ title, size = "default" }) => {
  return (
    <header className="flex items-end justify-between pt-2">
      <h1
        className={`font-medium text-gray-700 dark:text-slate-100 ${titleSizeClass[size]}`}
      >
        {title}
      </h1>
      <DarkMode />
    </header>
  );
};

export default PageHeader;
