import React from 'react';
import './Animal.css';

const AnimalsTotal = (props) => {
  return (
    <div className='total'>
      <p>There is total of {props.total} animal(s) in the shelter.</p>

    </div>
  )
}

export default AnimalsTotal;
