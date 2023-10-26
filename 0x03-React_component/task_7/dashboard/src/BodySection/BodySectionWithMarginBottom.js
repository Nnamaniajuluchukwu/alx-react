import React from 'react';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';


const BodySectionWithMarginBottom = (props) => (
  <div className="bodySectionWithMargin">
    <BodySection {...props} />
  </div>
);

export default BodySectionWithMarginBottom;
