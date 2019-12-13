/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Inner, Headline, Button } from './Base';
import LazyImage from './LazyImage';
import { getRecommendedProducts } from '../lib/recommendation';
import { PANEL_MOTION_VARIANTS } from '../lib/motion';
import { getScreenSize } from '../lib/utilities';
const parseProductData = () => {
  const script = document.getElementById('k-products-data');
  return JSON.parse(script.textContent);
};

const ResultsPanel = ({ direction, mode, reasons, screenSize, features, setMinHeight }) => {
  const panelRef = useRef();
  const productCards = useRef([]);
  const productData = useRef(parseProductData());

  useEffect(() => {
    setMinHeight(panelRef.current.offsetHeight);
  }, [screenSize]);

  const { hero, products } = getRecommendedProducts(productData.current, reasons, features, mode);

  // these aren't tagged with a product type, so this is the best bet for now
  const isVapeRec = hero.heading.includes('Vape');
  const nonVapeProducts = products.filter(product => !product.Name.includes('Vape'));

  const getCardMultiplier = () => {
    const screenWidth = getScreenSize().width;
    const bp = {
      inner: {width: 1},
      mobile: {width: 0, cardMinWidth: .765},
      sm: {width: 580, cardMinWidth: .405},
      md: {width: 767, cardMinWidth: .333},
      lg: {width: 992, cardMinWidth: .225},
    };

    const { inner, mobile, sm, md, lg } = bp;
    switch (true) {
      case (screenWidth < sm.width): {
        return inner.width / mobile.cardMinWidth;
      }
      case (screenWidth > sm.width && screenWidth < md.width): {
        return inner.width / sm.cardMinWidth;
      }  
      case (screenWidth > md.width && screenWidth < lg.width): {
        return inner.width / md.cardMinWidth;
      }
      case (screenWidth > lg.width): {
        return inner.width / lg.cardMinWidth;
      }
      default: {
        console.warn('default case');
        return 1;
      }
    };
  }

  const getMaxSlideDistance = () => {
    const { current } = productCards;
    let cardWidth = 0;
    let accumulator = 0;
    const cardMultiplier = getCardMultiplier();

    current.forEach(el => {
      cardWidth = el.offsetWidth;
      accumulator += el.offsetWidth;
    });

    accumulator -= (cardWidth * cardMultiplier);
    return -accumulator;
  };

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
            <figure>
              <LazyImage className="k-fshero--intro-bg" src={hero.image} />
            </figure>
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
              <small className="k-resulthero--disclaimer">
                FDA Disclaimer: This product is not intended to diagnose, treat, cure or prevent any disease.
              </small>
            </div>
          </div>
        </div>}

        {products && 
        <div className="k-fshero--results-body">
          <Inner size="md">
            <Headline tag="h1" size="md">Based on your responses, we recommend</Headline>
          </Inner>
          <Inner size="md">
            <div className="k-fsresults--related">
              <motion.div
                className="k-fsresults--slider"
                drag="x"
                dragConstraints={{ right: 0, left: getMaxSlideDistance() }}
              >
                {isVapeRec && products.map((product, i) => 
                  <div key={i} className="k-productcard" ref={ref => {productCards.current[i] = ref}}>
                    <div className="k-productcard--liner">
                      <figure className="k-figure">
                        <img src={product.Images.split(',')[0]} alt={product.Name} />
                      </figure>
                      <div className="k-productcard--title">
                        <h3 className="k-headline k-headline--fake k-weight--lg">{product.Name}</h3>
                      </div>
                      <div className="k-productcard--action">
                        <a href={product.LinkToProduct} className="k-button k-button--default">Buy Now</a>
                      </div>
                    </div>
                  </div>)
                }

                {!isVapeRec && nonVapeProducts.map((product, i) => 
                <div key={i} className="k-productcard" ref={ref => {productCards.current[i] = ref}}>
                  <div className="k-productcard--liner">
                    <figure className="k-figure">
                      <img src={product.Images.split(',')[0]} alt={product.Name} />
                    </figure>
                    <div className="k-productcard--title">
                      <h3 className="k-headline k-headline--fake k-weight--lg">{product.Name}</h3>
                    </div>
                    <div className="k-productcard--description">
                      <p>{product.description}</p>
                    </div>
                    <div className="k-productcard--action">
                      <a href={product.LinkToProduct} className="k-button k-button--default">Buy Now</a>
                    </div>
                  </div>
                </div>)}
              </motion.div>
            </div>
          </Inner>
        </div>}

      </div>
    </motion.div>
  );
};

export default ResultsPanel;
