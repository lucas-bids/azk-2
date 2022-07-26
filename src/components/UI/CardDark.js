const CardDark = (props) => {
  let background = ""

  if (props.backgroundType === "liquid") {
    background = "bg-liquid-2";
  } else {
    background = props.backgroundType;
  }

  return (
    <div
      className={`w-full rounded-2xl p-5 bg-cover text-white ${background}`}
    >
      {props.children}
    </div>
  );
};

export default CardDark;
