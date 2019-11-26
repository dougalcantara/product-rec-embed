import React from 'react';
import { motion } from 'framer-motion';
import { Inner } from './Base';
import { FIXED_CONTROLS_VARIANTS } from '../lib/motion';

const FixedControls = ({ activeIndex, onBackClick }) => {

  return (
    <motion.div
      variants={FIXED_CONTROLS_VARIANTS}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="k-fshero--fixed">
        <Inner size="lg">
          <button 
            type="button" 
            className="k-fshero--back"
            onClick={onBackClick}>&larr; Back</button>
          <div className="k-fshero--current">
            <span>0{activeIndex}</span> / <span>02</span>
          </div>
        </Inner>
      </div>
    </motion.div>
  );
};

export default FixedControls;
