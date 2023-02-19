import { InputProps } from './Input.types';

import './Input.scss';

const ImageWrap = ({
  onChange,
  placeholder,
  disabled,
  type = 'text',
  label
}: InputProps) => {
  return (
    <>
      <label className="input__label">{label}</label>
      <input
        type={type}
        onChange={onChange}
        className="input"
        placeholder={placeholder}
        disabled={disabled}
      />
    </>
  );
};

export default ImageWrap;
