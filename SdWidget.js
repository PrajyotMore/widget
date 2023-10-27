import "./SdWdget.css";

const SdWdget = ({
  //   widgetIcon = "/widget-icon.svg",
  widgetName = "Widget Name",
  counterNumber = "16",
  Children,
}) => {
  return (
    <div className="widget-no-code-proj">
      <div className="activity-tracker-widget">
        <div className="header">
          {/* <img className="widget-icon" alt="" src={widgetIcon} /> */}
          <div className="widget-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
            >
              <path
                d="M1.77348 9.31999C1.56015 9.31999 1.34681 9.25333 1.16015 9.10666C0.720147 8.77333 0.640147 8.14666 0.97348 7.70666L4.14681 3.58666C4.53348 3.09333 5.08015 2.77333 5.7068 2.69333C6.32013 2.61333 6.9468 2.78666 7.44013 3.17333L9.88013 5.09333C9.97347 5.17333 10.0668 5.17333 10.1335 5.16C10.1868 5.16 10.2801 5.13333 10.3601 5.02666L13.4401 1.05334C13.7735 0.613343 14.4135 0.533343 14.8401 0.88001C15.2801 1.21334 15.3601 1.84001 15.0135 2.28001L11.9335 6.25333C11.5468 6.74666 11.0001 7.06666 10.3735 7.13333C9.7468 7.21333 9.13347 7.03999 8.64013 6.65333L6.20013 4.73333C6.1068 4.65333 6.00013 4.65333 5.9468 4.66666C5.89347 4.66666 5.80013 4.69333 5.72013 4.8L2.54681 8.91999C2.37348 9.18666 2.08015 9.31999 1.77348 9.31999Z"
                fill="#25B0A9"
              />
            </svg>
          </div>
          <div className="widget-info">
            <div className="widget-info">
              <div className="widget-name">{widgetName}</div>
              <div className="widget-counter">
                <b className="counter-number">{counterNumber}</b>
              </div>
            </div>
            <img className="launch-1-icon" alt="" src="/launch-1.svg" />
          </div>
        </div>
        <div className="content-placeholer">{Children}</div>
      </div>
    </div>
  );
};

export default SdWdget;
