import { InputProps } from './Input.types';

import './Input.scss';

const ImageWrap = ({
  onChange,
  placeholder,
  disabled,
  type = 'text',
  label,
  defaultValue
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
        defaultValue={defaultValue}
      />
    </>
  );
};

export default ImageWrap;
