const Couter = ({ id, value, onDecrement, onIncrement }) => {
  return (
    <div className="counter">
      <b>{value}</b>
      <div className="counter-controls">
        <button className="button is-danger is-small" onClick={onDecrement}>
          -
        </button>
        <button className="button is-success is-small" onClick={onIncrement}>
          +
        </button>
      </div>
    </div>
  );
};

export default Couter;
