import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Inner } from './Base';
import { FIXED_CONTROLS_VARIANTS, CONTENT_MOTION_TRANSITION } from '../lib/motion';

const FixedControls = ({ activeIndex, panelType, onBackClick, onStartOver }) => {

  return (
    <motion.div
      variants={FIXED_CONTROLS_VARIANTS}
      transition={CONTENT_MOTION_TRANSITION}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="k-fshero--fixed">
        <Inner size="lg">

        <AnimatePresence>
          {panelType !== 'result' &&
          <motion.div
            key="btns-initial"
            className="k-fshero--fixed-btns"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, position: 'relative' }}
            exit={{ opacity: 0, y: -50, position: 'absolute' }}
            transition={CONTENT_MOTION_TRANSITION}>
            <button 
              type="button" 
              className="k-fshero--back"
              onClick={onBackClick}>&larr; Back</button>
            <div className="k-fshero--current">
              <span>0{activeIndex}</span> / <span>02</span>
            </div>
          </motion.div>}
        </AnimatePresence>

        <AnimatePresence>
          {panelType === 'result' &&
          <motion.div
            key="btns-result"
            className="k-fshero--fixed-btns"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0, position: 'relative' }}
            exit={{ opacity: 0, y: -50, position: 'absolute' }}
            transition={CONTENT_MOTION_TRANSITION}>
            <button
              type="button"
              className="k-fshero--back"
              onClick={onStartOver}>&larr; Start Over</button>
          </motion.div>}
        </AnimatePresence>

        </Inner>
      </div>
    </motion.div>
  );
};

export default FixedControls;
