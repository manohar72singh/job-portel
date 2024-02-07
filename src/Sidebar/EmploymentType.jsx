import React from "react";
import InputField from "../Components/InputField";

export default function EmploymentType({ handleChange }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Types of employment</h4>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" value="" onChange={handleChange} />
          <span className="checkmark"></span>
          Any
        </label>

        <InputField
          handleChange={handleChange}
          value="full-time"
          title="Full-time"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="temporary"
          title="Temporary"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="part-time"
          title="Part-time"
          name="test"
        />
      </div>
    </div>
  );
}
