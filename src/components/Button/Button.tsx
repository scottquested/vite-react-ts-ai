import { ButtonProps } from './Button.types';

import './Button.scss';

const Button = ({ children, onClick, disabled, type }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="button"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
