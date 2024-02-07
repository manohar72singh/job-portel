import React from "react";
import Button from "../Components/Button";
import InputField from "../Components/InputField";

export default function Salary({ handleChange, handleClick }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="mb-4">
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" value="" onChange={handleChange} />
          <span className="checkmark"></span>
          All
        </label>

        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50000"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 100000"
          name="test"
        />
      </div>
    </div>
  );
}
