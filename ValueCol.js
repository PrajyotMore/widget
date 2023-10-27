import "./ValueCol.css";

const ValueCol = ({ valueLabel = "All", value = "125" }) => {
  return (
    <div className="col3">
      <div className="text-label">
        <p className="recruited">{valueLabel}</p>
      </div>
      <b className="value7">{value}</b>
    </div>
  );
};

export default ValueCol;
