import React from 'react';
import { Inner } from './Base';

const FixedControls = ({ activeIndex, onBackClick }) => {

  return (
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
  );
};

export default FixedControls;
