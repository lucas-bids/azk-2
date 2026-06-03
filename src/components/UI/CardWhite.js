const CardWhite = (props) => {
  return (
    <div className="mt-4 rounded-[30px] bg-white p-4 shadow">
      {props.children}
    </div>
  );
};

export default CardWhite;
