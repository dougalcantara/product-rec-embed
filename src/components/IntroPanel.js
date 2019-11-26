import React, { createRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Inner, Headline, BodyText, Button } from './Base';
import LazyImage from './LazyImage';
import { INTRO_BG } from '../constants';
import { 
  PANEL_MOTION_VARIANTS,
  CONTENT_MOTION_VARIANTS,
  CONTENT_MOTION_TRANSITION
} from '../lib/motion';


const IntroPanel = ({ direction, setMinHeight, screenSize, onPrimaryClick, onSecondaryClick }) => {
  const panelRef = createRef();

  useEffect(() => {
    setMinHeight(panelRef.current.offsetHeight);
  }, [screenSize]);

  return (
    <motion.div
      className="k-fshero--panel k-fshero--intro"
      variants={PANEL_MOTION_VARIANTS}
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="k-fshero--centered" ref={panelRef}>
        <Inner size="md">
            
          <motion.div
            initial='initial'
            animate='animate'
            variants={CONTENT_MOTION_VARIANTS}
            transition={CONTENT_MOTION_TRANSITION}>
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
                onClick={onSecondaryClick}>My Pet &rarr;</Button>
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
