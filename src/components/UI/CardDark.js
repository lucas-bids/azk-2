import { elevatedCardShellClass } from "./uiClasses";

const backgroundVariants = {
  liquid: "bg-liquid-2",
  purple: "bg-[#9570e2]",
};

const CardDark = ({ variant = "liquid", children }) => {
  const background = backgroundVariants[variant] || backgroundVariants.liquid;

  return (
    <div
      className={`w-full bg-cover p-4 text-white ${background} ${elevatedCardShellClass}`}
    >
      {children}
    </div>
  );
};

export default CardDark;
