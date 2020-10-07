import React from 'react';
import Spend from './Spend';
import PropTypes from 'prop-types';

const SpendList = ({spends}) => (
  <div className='gastos-realizados'>
    <h2>Listado de Gastos</h2>
    {spends.map(spend => (
      <Spend 
        key={spend.id}
        spend={spend}
      />
    ))}
  </div>
);

SpendList.prototype = {
  spends: PropTypes.array.isRequired
}

export default SpendList;