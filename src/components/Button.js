/* eslint-disable react/prop-types */
const Button = ({
  type, value, handleClick, children, dataId,
}) => (
  <button type={type ? 'submit' : 'button'} value={value} data-id={dataId} onClick={handleClick} className="button active">{children}</button>
);

export default Button;
