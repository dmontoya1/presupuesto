import React, {useState, useEffect} from 'react';

import Ask from "./components/Ask";
import Form from "./components/Form";
import SpendList from "./components/SpendList";
import BudgetManager from "./components/BudgetManager";

function App() {

  // Definir el state
  const [budget, saveBudget] = useState(0)
  const [remaining, saveRemaining] = useState(0)
  const [showQuestion, saveShowQuestion] = useState(true)
  const [spends, saveSpends] = useState([]);
  const [spend, saveSpend] = useState({});
  const [createSpend, saveCreateSpend] = useState(false);

  // UseEffect que actualiza el restante
  useEffect(() => {
    if (createSpend) {

      // Crear nuevo presupuesto
      saveSpends([
        ...spends,
        spend
      ])

      // Resta del presupuesto actual

      const remainigBudget = remaining - spend.quantity
      saveRemaining(remainigBudget);

      // Reset a False
      saveCreateSpend(false)
    }
  }, [spend, createSpend, spends, remaining]);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          { showQuestion ? 
          (
            <Ask
              saveBudget={saveBudget}
              saveRemaining={saveRemaining}
              saveShowQuestion={saveShowQuestion}
            />
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Form 
                  saveSpend={saveSpend}
                  saveCreateSpend={saveCreateSpend}
                />
              </div>
              <div className='one-half column'>
                <SpendList spends={spends} />

                <BudgetManager 
                  budget={budget}
                  remaining={remaining}
                />
              </div>
            </div>
            ) 
          }
          
          

        </div>
      </header>
    </div>
  );
}

export default App;
