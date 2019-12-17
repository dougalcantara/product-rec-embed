import React from 'react';
import PropTypes from 'prop-types';
import { Headline } from './Base';
import PanelButton from './PanelButton';
import PanelWrap from './PanelWrap';
import { checklistChangeHandler, classnames } from '../lib/utilities';
import { FEATURE_OPTIONS } from '../constants';

const FeaturePanel = ({
  direction,
  mode,
  screenSize,
  features,
  setFeatures,
  setMinHeight,
  onNextClick }) => (
  <PanelWrap
    direction={direction}
    screenSize={screenSize}
    setMinHeight={setMinHeight}
    panelType="feature">
    <Headline size="md">How do you want to use CBD?</Headline>
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
    <PanelButton 
      disabled={features.length === 0}
      onNextClick={onNextClick}>
      Get Results &rarr;
    </PanelButton>
  </PanelWrap>
);

FeaturePanel.defaultProps = {
  onNextClick: () => {},
};

FeaturePanel.propTypes = {
  features: PropTypes.array.isRequired,
  setFeatures: PropTypes.func.isRequired,
  onNextClick: PropTypes.func,
};

export default FeaturePanel;
