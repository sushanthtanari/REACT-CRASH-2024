import React, { useEffect,useState } from "react"
import JobListing from "./JobListing";
import usefetchData from "../Hooks/useFetchData";

const JobListings = ({isHome = false}) => {

 const {jobs, loading} = usefetchData(isHome);

   return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? 'Recent Jobs' : 'Browse Jobs'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
              loading ? (<h1> Loading...</h1> ) : (
                <>
                {jobs.map((job) => (
                  <JobListing  job={job} key={job.id}/>
                ))}
                </>
              )
            }
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobListings;
