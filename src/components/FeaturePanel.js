import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Inner, Headline, Button } from './Base';
import { checklistChangeHandler, classnames } from '../lib/utilities';
import { FEATURE_OPTIONS } from '../constants';
import { PANEL_MOTION_VARIANTS } from '../lib/motion';

const FeaturePanel = ({ direction, mode, screenSize, features, setFeatures, setMinHeight, onNextClick }) => {
  const panelRef = createRef();

  useEffect(() => {
    setMinHeight(panelRef.current.offsetHeight);
  }, [screenSize]);

  return (
    <motion.div
      className="k-fshero--panel k-fshero--feature"
      variants={PANEL_MOTION_VARIANTS}
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="k-fshero--centered" ref={panelRef}>
        <Inner size="md">
          <Headline size="md">Which Features of CBD are Most Important to You?</Headline>

          <ul className="k-reasons--list">
            {FEATURE_OPTIONS[mode].map((feature, i) => 
            <li key={i} className={classnames({'k-active': features.indexOf(feature) > -1})}>
              <label htmlFor={`feature-${i}`}>
                <input
                  id={`feature-${i}`} 
                  type="checkbox"
                  checked={features.indexOf(feature) > -1}
                  onChange={_ => checklistChangeHandler(feature, features, updated => setFeatures(updated))} />
                <div className="k-feature--icon">
                  <span>0{i + 1}</span>
                </div>
                <div className="k-reason--title">
                  <h5>{feature}</h5>
                </div>
              </label>
            </li>)}
          </ul>
          
          <div className="k-fshero--btn">
            <Button 
              anchor={false} 
              variant="primary"
              onClick={onNextClick}>Get Results &rarr;</Button>
          </div>
        </Inner>
      </div>
    </motion.div>
  );
};

FeaturePanel.defaultProps = {
  onNextClick: () => {},
};

FeaturePanel.propTypes = {
  features: PropTypes.array.isRequired,
  setFeatures: PropTypes.func.isRequired,
  onNextClick: PropTypes.func,
};

export default FeaturePanel;
