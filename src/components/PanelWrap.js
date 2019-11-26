/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PANEL_MOTION_VARIANTS } from '../lib/motion';

const PanelWrap = ({ direction, screenSize, setMinHeight, PanelBg, children }) => {
  const panelRef = useRef();

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
        { children }
      </div>
      {PanelBg}
    </motion.div>
  );
};

PanelWrap.defaultProps = {
  PanelBg: '',
};

export default PanelWrap;
