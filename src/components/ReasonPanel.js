/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Inner, Headline } from './Base';
import PanelButton from './PanelButton';
import { checklistChangeHandler, classnames } from '../lib/utilities';
import { REASON_OPTIONS, REASON_HEADLINE } from '../constants';
import { PANEL_MOTION_VARIANTS } from '../lib/motion';

const ReasonPanel = ({ 
  direction, 
  mode, 
  screenSize, 
  reasons, 
  setReasons, 
  setMinHeight, 
  onNextClick 
}) => {
  const panelRef = createRef();

  useEffect(() => {
    setMinHeight(panelRef.current.offsetHeight);
  }, [screenSize]);

  return (
    <motion.div
      key="reason"
      className="k-fshero--panel k-fshero--reason"
      variants={PANEL_MOTION_VARIANTS}
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="k-fshero--centered" ref={panelRef}>
        <Inner size="lg">
          <Headline size="md">{ REASON_HEADLINE[mode] }</Headline>
          
          <ul className="k-reasons--list">
            {REASON_OPTIONS[mode].map((reason, i) => 
            <li key={i} className={classnames({'k-active': reasons.indexOf(reason.name) > -1})}>
              <label htmlFor={`reason-${i}`}>
                <input 
                  id={`reason-${i}`} 
                  type="checkbox"
                  checked={reasons.indexOf(reason.name) > -1}
                  onChange={_ => checklistChangeHandler(reason.name, reasons, updated => setReasons(updated))} />
                <div className="k-reason--icon">
                  <figure>
                    <span className="k-reason--icon-bg"></span>
                    <span className="k-reason--icon-img" style={{ backgroundImage: `url(${reason.icon})` }}></span>
                  </figure>
                </div>
                <div className="k-reason--title">
                  <h5>{reason.name}</h5>
                </div>
              </label>
            </li>)}
          </ul>
          
          <PanelButton 
            disabled={reasons.length === 0} 
            onNextClick={onNextClick}>
            Next &rarr;
          </PanelButton>
        </Inner>
      </div>
    </motion.div>
  );
};

ReasonPanel.defaultProps = {
  setReasons: () => {},
  onNextClick: () => {},
};

ReasonPanel.propTypes = {
  reasons: PropTypes.array.isRequired,
  setReasons: PropTypes.func,
  onNextClick: PropTypes.func,
};

export default ReasonPanel;
