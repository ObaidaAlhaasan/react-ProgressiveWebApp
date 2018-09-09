import React from 'react';

import '../index.css';

const Card = function ({ id, name, email }) {

  return (

    <div>
      <div className="bg-light-green br3 ma2 grow tc pa3 dib bw2 shadow-5 card">
        <img src={`https://robohash.org/${id}?120*120`} alt="Shadow616" />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );

}

export default Card;