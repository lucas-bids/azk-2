import { badgeBaseClass } from "./uiClasses";

const Badge = ({ children, tone = "neutral", className = "" }) => {
  const toneClass =
    tone === "selected"
      ? "bg-[#ece8ff] text-gray-600 dark:bg-violet-900/40 dark:text-violet-100"
      : tone === "timeline"
        ? "bg-gray-100 text-gray-500 dark:bg-slate-800 dark:text-slate-300"
        : "bg-[#eef1f7] text-gray-500 dark:bg-slate-800 dark:text-slate-300";

  return <span className={`${badgeBaseClass} ${toneClass} ${className}`.trim()}>{children}</span>;
};

export default Badge;
