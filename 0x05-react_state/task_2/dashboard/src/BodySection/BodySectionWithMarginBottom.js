import React from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';


const bodySectionWtMargin = StyleSheet.create({
  margin: '40px',
})

const BodySectionWithMarginBottom = (props) => (
  <div className={css(bodySectionWtMargin.margin)}>
    <BodySection {...props} />
  </div>
);

export default BodySectionWithMarginBottom;
