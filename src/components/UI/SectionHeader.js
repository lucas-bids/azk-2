import { sectionTitleClass } from "./uiClasses";

const SectionHeader = ({ title, actions }) => {
  return (
    <div className="mt-6 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <h2 className={sectionTitleClass}>{title}</h2>
      {actions ? <div>{actions}</div> : null}
    </div>
  );
};

export default SectionHeader;
