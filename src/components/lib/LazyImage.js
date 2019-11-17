import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { classnames } from '../../lib/utilities';

const LazyImage = ({ src, onLoad, className }) => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    const image = new Image();
    image.onload = () => {
      onLoad();
      setLoaded(true);
    };
    image.src = src;
  }, []);

  const imgClasses = classnames({
    [className]: true,
    'k-image-fill': true,
    'k-image-loaded': loaded, 
  });
  return (
    <div 
     style={{ backgroundImage: `url(${src})` }}
     className={imgClasses}></div>
  );
};

LazyImage.defaultProps = {
  onLoad: () => {},
  className: '',
};

LazyImage.propTypes = {
  src: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
  className: PropTypes.string,
}

export default LazyImage;
