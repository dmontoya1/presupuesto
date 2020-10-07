import React, {useState} from 'react'
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Error from './Error';

const Form = ({saveSpend, saveCreateSpend}) => {

  const [name, saveName] = useState('');
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false)

  // Agregar Gasto

  const createSpend = e => {
    e.preventDefault();

    // Validar
    if(quantity < 1 || isNaN(quantity) || name.trim() === ''){
      saveError(true)
      return;
    }
    saveError(false)

    // Construir el gasto
    const spend ={
      name,
      quantity,
      id: shortid.generate()
    }

    // Pasar al componente principal
    saveSpend(spend);
    saveCreateSpend(true);

    // Resetear el form
    saveName('')
    saveQuantity(0)

  }

  return ( 
    <form
      onSubmit={createSpend}
    >
      <h2>Agrega tus gastos</h2>
      {error ? <Error message="Los campos son obligatorios, o el presupuesto es incorrecto" /> : null}
      <div className='campo'>
        <label>Nombre gasto</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='Ejem. Transporte'
          value={name}
          onChange={e => saveName(e.target.value)}
        />
        <label>Cantidad gasto</label>
        <input
          type='number'
          className='u-full-width'
          placeholder='Ejem. 5.000'
          value={quantity}
          onChange={e => saveQuantity(parseInt(e.target.value, 10))}
        />
        <input 
          type='submit'
          className='button-primary u-full-width'
          value='Agregar Gasto'
        />
      </div>
    </form>
    );
}


Form.prototype = {
  saveSpend: PropTypes.func.isRequired,
  saveCreateSpend: PropTypes.func.isRequired,
}

export default Form;