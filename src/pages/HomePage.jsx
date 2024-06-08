import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import JobListings from '../components/JobListings';
import ViewAllJobs from '../components/ViewAllJobs';

const HomePage = () => {
    const title = "Become a React Dev";
    const subTitle = "Find the React job that fits your skills and needs";
    const isHome = true;
  return (
    <>
    <Hero title={title} subTitle={subTitle} />
    <HomeCards />
    <JobListings isHome={isHome}/>
    <ViewAllJobs />
    </>
  )
}

export default HomePage