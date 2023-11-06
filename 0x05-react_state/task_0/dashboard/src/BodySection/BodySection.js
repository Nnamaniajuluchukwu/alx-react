import React from 'react';

export default function BodySection ({ title, children }) {
  return (
    <div className='bodySection'>
      <h2 style={{}}>{title}</h2>
      { children }
    </div>
  )
}
