/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Inner } from './Base';
import {
  PANEL_MOTION_VARIANTS,
  CONTENT_MOTION_VARIANTS,
  CONTENT_MOTION_TRANSITION } from '../lib/motion';

const getPanelHeight = refHeight => {
  const oversize = refHeight > window.innerHeight;
  return oversize ? refHeight : window.innerHeight;
};

const PanelWrap = ({
  direction,
  screenSize,
  setMinHeight,
  panelType,
  PanelBg,
  children
}) => {
  const panelRef = useRef();
  const panelHeight = useRef(window.innerHeight);

  useEffect(() => {
    const refHeight = panelRef.current.offsetHeight;
    panelHeight.current = getPanelHeight(refHeight);
    setMinHeight(refHeight);
  }, [screenSize]);

  return (
    <motion.div
      className={`k-fshero--panel k-fshero--${panelType}`}
      style={{ height: panelHeight.current }}
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
            { children }
          </motion.div>
        </Inner>
      </div>
      {PanelBg}
    </motion.div>
  );
};

PanelWrap.defaultProps = {
  PanelBg: '',
};

export default PanelWrap;
