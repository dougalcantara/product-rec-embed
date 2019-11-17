/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroPanel from './components/IntroPanel';
import ReasonPanel from './components/ReasonPanel';
import FeaturePanel from './components/FeaturePanel';
import ResultsPanel from './components/ResultsPanel';
import FixedControls from './components/FixedControls';
import { PANEL_TYPES, PANEL_BG }  from './constants';


const App = () => {
  const [loaded, setLoaded] = useState(false);
  const [panelType, setPanelType] = useState('intro');
  const [reasons, setReasons] = useState([]);
  const [features, setFeatures] = useState([]);
  const [minHeight, setMinHeight] = useState('none');
  const [direction, setDirection] = useState('none'); // none, next, or prev

  const activeIndex = useMemo(() => PANEL_TYPES.indexOf(panelType), [panelType]);
  const showControls = useMemo(() => activeIndex > 0 && activeIndex < PANEL_TYPES.length - 1, [activeIndex]);

  const timeout = useRef(null);
  useEffect(() => {
    if (!loaded) {
      window.addEventListener('load', () => setLoaded(true));
      window.addEventListener('resize', () => {
        if (timeout.current) window.clearTimeout(timeout.current);
        timeout.current = window.setTimeout(() => {
          // handle resize
        }, 350);
      });
    }
  }, []);

  const goToPanel = (e, panel, direction = 'next') => {
    e.preventDefault();
    setDirection(direction);
    setPanelType(panel);
  };
  const resetAll = e => {
    e.preventDefault();
    setReasons([]);
    setFeatures([]);
    goToPanel(e, 'intro', 'prev');
  };

  return (
    <section 
      className={`k-fshero k-fshero-panel-${panelType}`} 
      style={{ minHeight, backgroundImage: `url(${PANEL_BG})` }}>
      {showControls &&
      <FixedControls
        activeIndex={activeIndex}
        onBackClick={e => goToPanel(e, PANEL_TYPES[activeIndex - 1], 'prev')} />}
      {loaded &&
      <AnimatePresence custom={direction}>
        {(panelType === 'intro' &&
          <IntroPanel 
            key="intro"
            direction={direction}
            setMinHeight={setMinHeight}
            onPrimaryClick={e => goToPanel(e, 'reason')}
            onSecondaryClick={e => goToPanel(e, 'result')} />) ||
        (panelType === 'reason' &&
          <ReasonPanel 
            key="reason"
            direction={direction}
            setMinHeight={setMinHeight}
            reasons={reasons}
            setReasons={setReasons}
            onNextClick={e => goToPanel(e, 'feature')} />) ||
        (panelType === 'feature' &&
          <FeaturePanel 
            key="feature"
            direction={direction}
            setMinHeight={setMinHeight}
            features={features}
            setFeatures={setFeatures}
            onNextClick={e => goToPanel(e, 'result')} />) ||
        (panelType === 'result' &&
          <ResultsPanel
            key="result"
            direction={direction}
            setMinHeight={setMinHeight}
            reasons={reasons}
            features={features}
            onStartOver={e => resetAll(e)} />)}
      </AnimatePresence>}
    </section>
  );
};

export default App;
