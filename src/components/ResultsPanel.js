/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Inner, Headline, Button } from './Base';
import { getRecommendedProducts } from '../lib/recommendation';
import { PANEL_MOTION_VARIANTS } from '../lib/motion';

const parseProductData = () => {
  const script = document.getElementById('k-products-data');
  return JSON.parse(script.textContent);
};

const ResultsPanel = ({ direction, mode, reasons, screenSize, features, setMinHeight }) => {
  const panelRef = useRef();
  const productData = useRef(parseProductData());

  console.log('Product data: ', productData.current);

  useEffect(() => {
    setMinHeight(panelRef.current.offsetHeight);
  }, [screenSize]);

  const { hero, products } = getRecommendedProducts(productData.current, reasons, features, mode);
  console.log('Products: ', products);
  return (
    <motion.div
      className="k-fshero--panel k-fshero--result"
      variants={PANEL_MOTION_VARIANTS}
      custom={direction}
      initial="initial"
      animate="animate"
      exit="exit">
      <div className="k-fshero--result-parent" ref={panelRef}>
        
        {hero &&
        <div className="k-fshero--results-hero">
          <div className="k-resulthero--top-img">
            <figure style={{ backgroundImage: `url(${hero.image})`}}></figure>
          </div>
          <div className="k-resulthero--top-info">
            <div className="k-resulthero--top-liner">
              <small>Your Results Are In:</small>
              <Headline tag="h1" size="md">{hero.heading}</Headline>
              <p>{hero.description}</p>
              <div className="k-resulthero--top-btn">
                <Button variant="primary" anchor href={hero.url}>Shop Now &rarr;</Button>
                <span>Scroll For More</span>
              </div>
            </div>
          </div>
        </div>}

        {products && 
        <div className="k-fshero--results-body">
          <Inner size="md">
            <Headline tag="h1" size="md">More Results For You</Headline>
          </Inner>
          <Inner size="md">
            <div className="k-fsresults--related">

              {products.map((product, i) => 
              <div key={i} className="k-productcard">
                <div className="k-productcard--liner">
                  <figure className="k-figure">
                    <img src={product.Images.split(',')[0]} alt={product.Name} />
                  </figure>
                  <div className="k-productcard--title">
                    <h3 className="k-headline k-headline--fake k-weight--lg">{product.Name}</h3>
                    <p className="k-accent-text">Subtitle text can go here.</p>
                  </div>
                  <div clasName="k-productcard--action">
                    <a href="#buy-now" className="k-button k-button--default">Buy Now</a>
                  </div>
                </div>
              </div>)}

            </div>
          </Inner>
        </div>}

      </div>
    </motion.div>
  );
};

export default ResultsPanel;
