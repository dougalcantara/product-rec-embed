/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Headline } from './Base';
import PanelButton from './PanelButton';
import PanelWrap from './PanelWrap';
import { checklistChangeHandler, classnames } from '../lib/utilities';
import { REASON_OPTIONS, REASON_HEADLINE } from '../constants';

const ReasonPanel = ({ 
  direction, 
  mode, 
  screenSize, 
  reasons, 
  setReasons, 
  setMinHeight, 
  onNextClick 
}) => {
  const focusIndex = useRef(null);
  const focusHandler = index => focusIndex.current = index;
  
  return (
    <PanelWrap
      direction={direction}
      screenSize={screenSize}
      setMinHeight={setMinHeight}
      panelType="reason">  
      <Headline size="md">{ REASON_HEADLINE[mode] }</Headline>
      <ul className="k-reasons--list">
        {REASON_OPTIONS[mode].map((reason, i) => 
        <li key={i} className={classnames({'k-active': reasons.indexOf(reason.name) > -1})}>
          <label htmlFor={`reason-${i}`}>
            <input 
              id={`reason-${i}`} 
              type="checkbox"
              checked={reasons.indexOf(reason.name) > -1}
              onFocus={_ => focusHandler(i)}
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
    </PanelWrap>
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
