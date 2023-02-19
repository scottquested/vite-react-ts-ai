import { HeadingProps } from './Heading.types';

import './Heading.scss';

const Heading = ({ headingLevel, children }: HeadingProps) => {
  const HeadingTag = headingLevel || 'h1';

  return <HeadingTag className="heading">{children}</HeadingTag>;
};

export default Heading;
