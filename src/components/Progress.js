/* eslint-disable react/prop-types */
const Progress = ({ progress }) => {
  const calcValue = 220 - (220 * progress) / 100;

  return (
    <div className="circle">
      <svg className="c-svg">
        <circle
          fill="none"
          strokeWidth="3"
          stroke="#e8e8e8"
          strokeDasharray="220"
          strokeDashoffset="0"
          cx="35"
          cy="35"
          r="30"
        />
        <circle
          fill="none"
          strokeWidth="3"
          stroke="#0290ff"
          strokeDashoffset={calcValue}
          cx="35"
          cy="35"
          r="30"
        />
      </svg>
      <span className="txt-cont">
        <p>
          {progress}
          %
        </p>
        <p>Completed</p>
      </span>
    </div>
  );
};

export default Progress;
