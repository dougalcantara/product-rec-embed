import React from 'react';
import { motion } from 'framer-motion';
import { Button } from './Base';
import { BUTTON_VARIANTS } from '../lib/motion';

const PanelButton = ({ disabled, onNextClick, children }) => (
  <div className="k-fshero--btn">
    <motion.div 
      variants={BUTTON_VARIANTS} 
      initial={false}
      animate={disabled ? 'hide' : 'show'}>
      <Button 
        anchor={false} 
        variant="primary"
        disabled={disabled}
        onClick={onNextClick}>{ children }</Button>
    </motion.div>
  </div>
);

export default PanelButton;
