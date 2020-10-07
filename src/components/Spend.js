import React from 'react';
import PropTypes from 'prop-types';

const Spend = ({spend}) => (
  <li className='gastos'>
    <p>
      {spend.name}
      <span className='gasto'>$ {spend.quantity}</span>
      
    </p>
  </li>
);

Spend.prototype = {
  spend: PropTypes.object.isRequired
}

export default Spend;