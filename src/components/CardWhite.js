const CardWhite = (props) => {
  return (
    <Fragment>
      <div className="bg-white rounded-2xl shadow p-3 mt-4">
        {props.children}
      </div>
    </Fragment>
  );
};

export default CardWhite;
