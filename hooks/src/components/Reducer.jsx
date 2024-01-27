import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incremented_age": {
      return {
        ...state,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        ...state,
        name: action.nextName,
      };
    }
  }
}
const initialState = { name: "Pooja", age: 23 };

const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (e) => {
    dispatch({
      type: "changed_name",
      nextName: e.target.value,
    });
  };

  const handleButtonClick = () => {
    dispatch({ type: "incremented_age" });
  };

  return (
    <div>
      <input type="text" value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment Age</button>
      <p>
        {state.name} {state.age}
      </p>
    </div>
  );
};

export default Reducer;
