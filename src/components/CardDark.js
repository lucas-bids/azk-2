const CardDark = (props) => {
  return (
    <div
      className={`w-full rounded-2xl p-5 bg-cover text-white ${
        props.backgroundType == "liquid" ? "bg-liquid-2" : ""
      }
       ${props.backgroundType == "purple" ? "bg-purple-500" : ""}
      `}
    ><div className="">

      {props.children}
    </div>
    </div>
  );
};

export default CardDark;
