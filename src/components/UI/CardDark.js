import { surfaceCardClass } from "./uiClasses";

const backgroundVariants = {
  liquid: "bg-liquid-2",
  purple: "bg-[#9570e2]",
};

const CardDark = ({ variant = "liquid", children }) => {
  const background = backgroundVariants[variant] || backgroundVariants.liquid;

  return (
    <div
      className={`${surfaceCardClass} w-full bg-cover p-6 text-white ${background}`}
    >
      {children}
    </div>
  );
};

export default CardDark;
