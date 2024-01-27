import React from "react";
import { useState } from "react";
const DynamicForm = () => {
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);

  const handleFormChange = (e, index) => {
    let data = [...inputFields];
    data[index][e.target.name] = e.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    let newField = { name: "", age: "" };
    setInputFields([...inputFields, newField]);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputFields);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {inputFields.map((input, index) => {
          return (
            <div key={index}>
              <input
                name="name"
                placeholder="Name"
                value={input.name}
                onChange={(e) => handleFormChange(e, index)}
              />
              <input
                name="age"
                placeholder="Age"
                value={input.age}
                onChange={(e) => handleFormChange(e, index)}
              />
              <button type="button" onClick={() => removeFields(index)}>
                Remove
              </button>
            </div>
          );
        })}
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
      <button onClick={addFields}>Add More...</button>
    </>
  );
};

export default DynamicForm;
