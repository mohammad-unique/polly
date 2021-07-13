import React from "react";

const DummyField = () => {
  return (
    <div>
      <input placeholder={"enter dummy label"} />
      <select>
        <option value={"text"}>text</option>
        <option value={"richText"}>richText</option>
        <option value={"number"}>number</option>
        <option value={"date"}>date</option>
      </select>
    </div>
  );
};

export default DummyField;
