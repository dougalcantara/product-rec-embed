import React from 'react';
import PropTypes from 'prop-types';
import { Headline, BodyText, Button } from './Base';
import LazyImage from './LazyImage';
import PanelWrap from './PanelWrap';
import { INTRO_BG } from '../constants';

const PanelBg = <LazyImage className="k-fshero--intro-bg" src={INTRO_BG} />;

const IntroPanel = ({
  direction,
  setMinHeight,
  screenSize,
  onPrimaryClick,
  onSecondaryClick }) => (
  <PanelWrap 
    direction={direction}
    screenSize={screenSize}
    setMinHeight={setMinHeight}
    panelType="intro"
    PanelBg={PanelBg}>
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
  </PanelWrap>
);

IntroPanel.defaultProps = {
  onPrimaryClick: () => {},
  onSecondaryClick: () => {},
};

IntroPanel.propTypes = {
  onPrimaryClick: PropTypes.func,
  onSecondaryClick: PropTypes.func,
};

export default IntroPanel;
