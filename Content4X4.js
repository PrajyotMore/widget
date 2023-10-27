import ValueCol from "./ValueCol";
import "./Content4X4.css";

const Content4X4 = () => {
  return (
    <div className="content-4x4">
      <div className="row-1">
        <ValueCol valueLabel="Recruited" value="13" />
        <div className="divider-v" />
        <div className="col">
          <div className="text2">
            <p className="applications">Applications</p>
          </div>
          <b className="value4">03</b>
        </div>
      </div>
      <div className="divider-h" />
      <div className="row-1">
        <div className="col">
          <div className="text2">
            <p className="applications">Drafts</p>
          </div>
          <b className="value4">04</b>
        </div>
        <div className="divider-v" />
        <div className="col">
          <div className="text2">
            <p className="applications">Failed</p>
          </div>
          <b className="value4">05</b>
        </div>
      </div>
    </div>
  );
};

export default Content4X4;
