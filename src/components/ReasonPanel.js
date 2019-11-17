import React, { useEffect, createRef } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Inner, Headline, Button } from './Base';
import { checklistChangeHandler, classnames } from '../lib/utilities';
import { REASON_OPTIONS, MOTION_VARIANTS } from '../constants';


const ReasonPanel = ({ direction, reasons, setReasons, setMinHeight, onNextClick }) => {
  const panelRef = createRef();
  useEffect(() => {
    setMinHeight(panelRef.current.offsetHeight);
  }, []);

  return (
    <motion.div
      key="reason"
      className="k-fshero--panel k-fshero--reason"
      variants={MOTION_VARIANTS}
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="k-fshero--centered" ref={panelRef}>
        <Inner size="lg">
          <Headline size="md">Why Are You Looking for CBD?</Headline>
          
          <ul className="k-reasons--list">
            {REASON_OPTIONS.map((reason, i) => 
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
          
          <div className="k-fshero--btn">
            <Button 
              anchor={false} 
              variant="primary"
              onClick={onNextClick}>Next &rarr;</Button>
          </div>
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
