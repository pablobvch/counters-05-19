import React, { useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

//factor is the  integer value as a parameter
//which is the amount to increment the counter's existing value by.
const initialState = [
  { id: 1, value: 0, factor: 1 },
  { id: 2, value: 0, factor: 2 },
  { id: 3, value: 0, factor: 3 },
  { id: 4, value: 0, factor: 4 }
];

function App() {
  const [state, setState] = useState(initialState);
  const [total, setTotal] = useState(0);

  const onDecrement = (id, factor) => {
    let newState = [...state];
    let item = { ...state[id] };
    item.value = item.value - Number(factor);
    newState[id] = item;
    setTotal((prevTotal) => prevTotal - Number(factor));
    setState(newState);
  };

  const onIncrement = (id, factor) => {
    let newState = [...state];
    let item = { ...state[id] };
    item.value = item.value + Number(factor);
    newState[id] = item;
    setTotal((prevTotal) => prevTotal + Number(factor));
    setState(newState);
  };

  return (
    <div className="App">
      <div>
        {state.map((counter) => (
          <Counter
            key={counter.id}
            id={counter.id}
            value={counter.value}
            onIncrement={() => onIncrement(counter.id - 1, counter.factor)}
            onDecrement={() => onDecrement(counter.id - 1, counter.factor)}
          />
        ))}
      </div>
      <p>Total: {total}</p>
    </div>
  );
}

export default App;
