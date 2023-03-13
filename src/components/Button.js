/* eslint-disable react/prop-types */
const Button = ({
  type, value, handleClick, children, dataId, className,
}) => (
  <button type={type ? 'submit' : 'button'} value={value} data-id={dataId} onClick={handleClick} className={className}>{children}</button>
);

export default Button;
