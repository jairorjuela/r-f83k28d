import React, { Fragment, useState } from 'react';

export const App = () => {

  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <span className="value">{count}</span>
      <button
        id="inc"
        onClick={ () => setCount(count + 1) }
      >
        Incrementa
      </button>
    </Fragment>
  );
};

export default App;
