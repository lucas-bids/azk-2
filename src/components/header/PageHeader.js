import DarkMode from "../login/DarkMode";

const titleSizeClass = {
  default: "text-5xl",
  large: "text-6xl",
};

const PageHeader = ({ title, size = "default" }) => {
  return (
    <header className="flex items-end justify-between pt-3">
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
