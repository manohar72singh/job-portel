import React from "react";
import InputField from "../Components/InputField";

export default function JobPostingDate({ handleChange }) {
  const now = new Date();

  const twentyFourHourAgo = new Date(now - 24 * 60 * 60 * 1000);
  //console.log(twentyFourHourAgo);
  const sevenDayAgo = new Date(now - 7 * 24 * 60 * 60 * 1000);
  const thirtyDayAgo = new Date(now - 30 * 24 * 60 * 60 * 1000);

  // convert date to string
  const twentyFourHourAgoDate = twentyFourHourAgo.toISOString().slice(0, 10);
  //console.log(twentyFourHourAgoDate);
  const sevenDayAgoDate = sevenDayAgo.toISOString().slice(0, 10);
  const thirtyDayAgoDate = thirtyDayAgo.toISOString().slice(0, 10);
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Date of posting</h4>
      <div>
        <label className="sidebar-label-container">
          <input type="radio" name="test" value="" onChange={handleChange} />
          <span className="checkmark"></span>
          All Time
        </label>

        <InputField
          handleChange={handleChange}
          value={twentyFourHourAgoDate}
          title="Last 24 hours"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={sevenDayAgoDate}
          title="Last 7 days"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value={thirtyDayAgoDate}
          title="Last Month"
          name="test"
        />
      </div>
    </div>
  );
}
