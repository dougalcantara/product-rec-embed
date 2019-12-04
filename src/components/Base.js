import React from 'react';

export const Inner = ({ size, children }) => (
  <div className={`k-inner k-inner--${size}`}>
    {children}
  </div>
);

export const Headline = ({ size, tag, children }) => {
  const classname = `k-headline k-headline--${size}`;
  return (
    tag === 'h1' ?
    <h1 className={classname}>{children}</h1> :
    <h3 className={classname}>{children}</h3>
  );
};

export const BodyText = ({ children }) => (
  <div className="k-hero--bigtext">
    <p>{children}</p>
  </div>
);

export const Button = ({ variant, anchor, href, title, target, children, disabled, onClick }) => {
  const classname = `k-button k-button--${variant}`;
  return (
    anchor !== false ?
    <a href={href} title={title} className={classname} target={target}>{children}</a> :
    <button type="button" className={classname} disabled={disabled} onClick={onClick}>{children}</button>
  );
};