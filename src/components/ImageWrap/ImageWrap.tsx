import { ImageWrapProps } from './ImageWrap.types';

import './ImageWrap.scss';

const ImageWrap = ({ children }: ImageWrapProps) => {
  return <div className="image-wrap">{children}</div>;
};

export default ImageWrap;
