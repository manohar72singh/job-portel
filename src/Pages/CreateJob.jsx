import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
export default function CreateJob() {
  const [selectedOption, setSelectedOption] = useState(null);

  const [data, setData] = useState({
    companyName: "",
    jobTitle: "",
    companyLogo: "",
    minPrice: "",
    maxPrice: "",
    salaryType: "",
    jobLocation: "",
    postingDate: "",
    experienceLevel: "",
    employmentType: "",
    description: "",
    email: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    data.skills = selectedOption;
    fetch("http://127.0.0.1:1001/venderDetail");
    console.log(data);
  };

  const options = [
    { value: "Javascript", label: "Javascript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "MongoDB", label: "MongoDB" },
    { value: "Redux", label: "Redux" },
    { value: "Node", label: "Node" },
  ];

  return (
    <div className="max-wscreen-2xl container mx-auto xl:px-24 px-4">
      <div className="bg-[#FAFAFA] py-10 px-4 lg:px-16">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 1st row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="jobTitle" className="block mb-2 text-lg">
                Job Title
              </label>
              <input
                type="text"
                name="jobTitle"
                onChange={handleChange}
                defaultValue={"Web Devloper"}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="companyName" className="block mb-2 text-lg">
                Company Name{" "}
              </label>
              <input
                type="text"
                placeholder="Ex: Microsoft"
                name="companyName"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 2nd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="minPrice" className="block mb-2 text-lg">
                Minimum Salary
              </label>
              <input
                type="text"
                placeholder="$20k"
                name="minPrice"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="maxPrice" className="block mb-2 text-lg">
                Maximum Salary{" "}
              </label>
              <input
                type="text"
                name="maxPrice"
                placeholder="$120k"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 3rd row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="salaryType" className="block mb-2 text-lg">
                salary Type
              </label>
              <select
                name="salaryType"
                onChange={handleChange}
                className="create-job-input"
              >
                <option value="">Choose Your Salary</option>
                <option value="Hourly">Hourly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="jobLocation" className="block mb-2 text-lg">
                Job Location
              </label>
              <input
                type="text"
                name="jobLocation"
                placeholder="Ex: New York City"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
          </div>

          {/* 4th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="postingDate" className="block mb-2 text-lg">
                Job Posting Date
              </label>
              <input
                type="date"
                name="postingDate"
                placeholder="Ex: 2024-01-30"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="experienceLevel" className="block mb-2 text-lg">
                Experince Level
              </label>
              <select
                name="experienceLevel"
                onChange={handleChange}
                className="create-job-input"
              >
                <option value="">Choose Your Experience</option>
                <option value="NoExperince">Fresher</option>
                <option value="Internship">Internship</option>
                <option value="Work remotely">Work Remotely</option>
              </select>
            </div>
          </div>

          {/* 5th row */}
          <div>
            <label htmlFor="skills" className="block mb-2 text-lg">
              Requires Skill Sets:
            </label>
            <CreatableSelect
              name="skills"
              defaultValue={selectedOption}
              onChange={setSelectedOption}
              options={options}
              isMulti
              className="create-job-input py-4"
            />
          </div>

          {/* 6th row */}
          <div className="create-job-flex">
            <div className="lg:w-1/2 w-full">
              <label htmlFor="companyLogo" className="block mb-2 text-lg">
                Company Logo
              </label>
              <input
                type="url"
                name="companyLogo"
                placeholder="Paste your company logo URL: www.example.com/img1"
                onChange={handleChange}
                className="create-job-input"
              />
            </div>
            <div className="lg:w-1/2 w-full">
              <label htmlFor="employmentType" className="block mb-2 text-lg">
                Employment Type
              </label>
              <select
                name="employmentType"
                onChange={handleChange}
                className="create-job-input"
              >
                <option value="">Choose Your Employment Type</option>
                <option value="Full-time">Full-time</option>
                <option value="Part-time">Part-time</option>
                <option value="Temporary">Temporary</option>
              </select>
            </div>
          </div>

          {/* 7th row */}
          <div className="w-full">
            <label htmlFor="description" className="block mb-2 text-lg">
              Job Description
            </label>
            <textarea
              className="w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-700"
              rows={5}
              name="description"
              defaultValue={" Manohar kumar singh........"}
              placeholder="Job Description"
              onChange={handleChange}
            />
          </div>

          {/* Last row */}
          <div className="w-full">
            <label htmlFor="email" className="block mb-2 text-lg">
              Job Posted By
            </label>
            <input
              type="email"
              name="email"
              placeholder="your email"
              onChange={handleChange}
              className="create-job-input"
            />
          </div>
          <input
            type="submit"
            className="block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer"
          />
        </form>
      </div>
    </div>
  );
}
