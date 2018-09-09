import React from 'react';
import Card from './Card';
const CardsArray = ({ robots }) => {
  const cardComponent = robots.map((rob, ind) => {
    return <Card key={ind} id={robots[ind].id} name={robots[ind].name} email={robots[ind].email} />
  });

  return (
    <div>
      {cardComponent}
    </div>
  )
};

export default CardsArray;