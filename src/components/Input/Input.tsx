import { InputProps } from './Input.types';

const ImageWrap = ({ onChange }: InputProps) => {
  return <input type="text" onChange={onChange} />;
};

export default ImageWrap;
