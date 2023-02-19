import { TypeAnimation } from 'react-type-animation';
import { LoadingProps } from './Loading.types';

const Loading = ({ loading }: LoadingProps) => {
  return (
    <TypeAnimation
      sequence={['AI is generating image...']}
      speed={30}
      cursor={loading}
    />
  );
};

export default Loading;
