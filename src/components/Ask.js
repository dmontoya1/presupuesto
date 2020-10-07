import React , {Fragment, useState} from 'react'
import PropTypes from 'prop-types';
import Error from './Error';

const Ask = ({saveBudget, saveRemaining, saveShowQuestion}) => {

  // Definir el state
  const [quantity, saveQuantity] = useState(0);
  const [error, saveError] = useState(false)

  // Submit para definir presupuesto
  const addBudget = e => {
    e.preventDefault();

    // Validar
    if(quantity < 1 || isNaN(quantity)){
      saveError(true)
      return;
    }


    // Si se para la validación
    saveError(false)
    saveBudget(quantity)
    saveRemaining(quantity)
    saveShowQuestion(false)
  }

  return ( 
    <Fragment>
      <h2>Ingresa tu presupuesto</h2>
      {error ? <Error message="El presupuesto es incorrecto" /> : null}
      <form
        onSubmit={addBudget}
      >
        <input 
          type="number"
          className="u-full-width"
          placeholder="Ingresa tu presupuesto"
          onChange={e => saveQuantity(parseInt(e.target.value), 10)}
        />
        <input
          type="submit"
          className="button-primary u-full-width"
          value="Definir presupuesto"
        />
      </form>
    </Fragment>
  );
}

Ask.prototype = {
  saveBudget: PropTypes.func.isRequired,
  saveRemaining: PropTypes.func.isRequired,
  saveShowQuestion: PropTypes.func.isRequired,
}

export default Ask;
