import './index.scss';
import {Text} from '@fower/taro';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Icon = ({type, className, ...props}) => {
  return (
    <Text className={clsx(`mxi mxi-${type}`, className)} {...props}/>
  );
};

Icon.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
