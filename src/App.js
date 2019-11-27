/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroPanel from './components/IntroPanel';
import ReasonPanel from './components/ReasonPanel';
import FeaturePanel from './components/FeaturePanel';
import ResultsPanel from './components/ResultsPanel';
import FixedControls from './components/FixedControls';
import { getScreenSize } from './lib/utilities';
import { PANEL_TYPES, PANEL_BG }  from './constants';


const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [panelType, setPanelType] = useState('intro');
  const [mode, setMode] = useState('default'); // default, or pet
  const [reasons, setReasons] = useState([]);
  const [features, setFeatures] = useState([]);
  const [minHeight, setMinHeight] = useState('none');
  const [direction, setDirection] = useState('none'); // none, next, or prev
  const [screenSize, setScreenSize] = useState(getScreenSize());

  const activeIndex = useMemo(() => PANEL_TYPES.indexOf(panelType), [panelType]);
  const showControls = useMemo(() => activeIndex > 0 && activeIndex <= PANEL_TYPES.length, [activeIndex]);

  console.log('Controls: ', showControls);

  const timeout = useRef(null);
  useEffect(() => {
    if (!loaded) {
      window.addEventListener('load', () => setLoaded(true));
      window.addEventListener('resize', () => {
        if (timeout.current) window.clearTimeout(timeout.current);
        timeout.current = window.setTimeout(() => {
          setScreenSize(getScreenSize());
        }, 350);
      });
    }
  }, []);

  const goToPanel = (e, panel, direction = 'next') => {
    e.preventDefault();
    setDirection(direction);
    setPanelType(panel);
  };
  const switchMode = (e, mode) => {
    setMode(mode);
    goToPanel(e, 'reason', 'next');
  };
  const resetAll = e => {
    e.preventDefault();
    setReasons([]);
    setFeatures([]);
    setMode('default');
    goToPanel(e, 'intro', 'prev');
  };

  const passThroughProps = { direction, mode, setMinHeight, screenSize };
  
  return (
    <section 
      className={`k-fshero k-fshero-panel-${panelType} k-fshero-mode-${mode}`} 
      style={{ minHeight, backgroundImage: `url(${PANEL_BG})` }}>
      {showControls &&
      <FixedControls
        key="controls"
        activeIndex={activeIndex}
        panelType={panelType}
        onStartOver={e => resetAll(e)}
        onBackClick={e => goToPanel(e, PANEL_TYPES[activeIndex - 1], 'prev')} />}
      {loaded &&
      <AnimatePresence custom={direction}>
        {(panelType === 'intro' &&
          <IntroPanel
            {...passThroughProps}
            key="intro"
            onPrimaryClick={e => switchMode(e, 'default')}
            onSecondaryClick={e => switchMode(e, 'pet')} />) ||
        (panelType === 'reason' &&
          <ReasonPanel
            {...passThroughProps}
            key="reason"
            reasons={reasons}
            setReasons={setReasons}
            onNextClick={e => goToPanel(e, 'feature')} />) ||
        (panelType === 'feature' &&
          <FeaturePanel
            {...passThroughProps}
            key="feature"
            features={features}
            setFeatures={setFeatures}
            onNextClick={e => goToPanel(e, 'result')} />) ||
        (panelType === 'result' &&
          <ResultsPanel
            {...passThroughProps}
            key="result"
            reasons={reasons}
            features={features} />)}
      </AnimatePresence>}
    </section>
  );
};

export default App;
