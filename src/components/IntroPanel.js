import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Inner, Headline, BodyText, Button } from './Base';
import LazyImage from './lib/LazyImage';
import { MOTION_VARIANTS, INTRO_BG } from '../constants';

const initial = {
  opacity: 0,
  y: 100,
};
const animate = {
  opacity: 1,
  y: 0,
};
const transition = {
  delay: 0.35,
  opacity: {
    ease: 'linear',
    duration: 1
  },
  y: {
    type: 'spring',
    duration: 1
  }
}

const IntroPanel = ({ direction, setMinHeight, onPrimaryClick, onSecondaryClick }) => {
  const panelRef = createRef();
  useEffect(() => {
    setMinHeight(panelRef.current.offsetHeight);
  }, []);

  return (
    <motion.div
      className="k-fshero--panel k-fshero--intro"
      variants={MOTION_VARIANTS}
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="k-fshero--centered" ref={panelRef}>
        <Inner size="md">
            
          <motion.div initial={initial} animate={animate} transition={transition}>
            <Headline size="lg">Welcome To The Koi CBD Product Finder</Headline>
            <BodyText>I'm interested in CBD products for...</BodyText>
            <div className="k-hero--action">
              <Button 
                anchor={false} 
                variant="primary"
                onClick={onPrimaryClick}>Myself or a Loved One &rarr;</Button>
              <Button 
                anchor={false} 
                variant="secondary"
                onClick={onSecondaryClick}>My Pet</Button>
            </div>
          </motion.div>
          
        </Inner>
      </div>
      <LazyImage className="k-fshero--intro-bg" src={INTRO_BG} />
    </motion.div>
  );
};

IntroPanel.defaultProps = {
  onPrimaryClick: () => {},
  onSecondaryClick: () => {},
};

IntroPanel.propTypes = {
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
};

export default IntroPanel;
