import React, { Component } from 'react';

const Scroll = (props) => {

  return (
    <div style={{ overflowY: 'auto', border: '2px solid skyblue', height: '800px' }}>
      {props.children}
    </div>
  )
}

export default Scroll;