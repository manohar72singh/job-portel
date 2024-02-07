import React, { useEffect, useState } from "react";
import Banner from "../Components/Banner";
import Card from "../Components/Card";
import Jobs from "./Jobs";
import Sidebar from "../Sidebar/Sidebar";
import NewsLatter from "../Components/NewsLatter";

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 6;

  // handle change of input fields
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // load the jobs list
  useEffect(() => {
    setIsLoaded(true);
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
        setIsLoaded(false);
      });
  }, []);

  // filter jobs by title
  const filteredItems = jobs.filter(
    (job) => job.jobTitle.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // -------Redio Filtering ----------
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // -------Button Based Filtering ----------
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  // --------------- pagination ------------------
  //calculate the index range
  const calculatePageRange = () => {
    const startIndex = (currentPage - 1) * itemPerPage;
    const endIndex = startIndex + itemPerPage;
    return { startIndex, endIndex };
  };

  // function for the next page
  const nextPage = () => {
    if (currentPage < Math.ceil(filteredItems.length / itemPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  //function for the previous page
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  // ------- Main Function --------------------------------
  const filtereData = (jobs, selected, query) => {
    let filteredJobs = jobs;

    //filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }

    //category filtering
    if (selected) {
      filteredJobs = filteredJobs.filter(
        ({
          jobLocation,
          maxPrice,
          experienceLevel,
          salaryType,
          employmentType,
          postingDate,
        }) =>
          jobLocation.toLowerCase() === selected.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selected) ||
          experienceLevel.toLowerCase() === selected.toLowerCase() ||
          salaryType.toLowerCase() === selected.toLowerCase() ||
          employmentType.toLowerCase() === selected.toLowerCase() ||
          postingDate >= selected
      );
      console.log(filteredJobs);
    }

    const { startIndex, endIndex } = calculatePageRange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex);

    return filteredJobs.map((data, i) => <Card key={i} data={data} />);
  };

  const result = filtereData(jobs, selectedCategory, query);

  return (
    <>
      <div>
        <Banner query={query} handleInputChange={handleInputChange} />

        {/* Main Content */}
        <div className="bg-[#FAFAFA] md:grid grid-cols-4 gap-8 lg:px-24 px-4 py-12">
          {/* left Side */}
          <div className="bg-white p-4 rounded">
            <Sidebar handleChange={handleChange} handleClick={handleClick} />
          </div>

          {/* Job Cards */}
          <div className="col-span-2 bg-white p-4 rounded-sm">
            {isLoaded ? (
              <p className="font-medium">Loading....</p>
            ) : result.length > 0 ? (
              <Jobs result={result} />
            ) : (
              <>
                <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
                <p>No Data Found !</p>
              </>
            )}

            {/* Pegination Here */}
            {result.length > 0 ? (
              <div className="flex justify-center mt-4 space-x-8">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="hover:underline"
                >
                  Previous
                </button>
                <span className="mx-2">
                  Page {currentPage} of{" "}
                  {Math.ceil(filteredItems.length / itemPerPage)}
                </span>
                <button
                  onClick={nextPage}
                  disabled={
                    currentPage ===
                    Math.ceil(filteredItems.length / itemPerPage)
                  }
                  className="hover:underline"
                >
                  Next
                </button>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Right Side */}
          <div className="bg-white p-4 rounded">
            <NewsLatter />
          </div>
        </div>
      </div>
    </>
  );
}
