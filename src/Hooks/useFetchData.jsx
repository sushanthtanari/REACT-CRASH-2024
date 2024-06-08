import { useEffect, useState } from "react"


const usefetchData = (isHome) => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchJobs = async () => {
        const apiUrl = isHome ? '/api/jobs?_limit=3' : '/api/jobs';
        try {
          const res = await fetch(apiUrl);
          const data = await res.json();
          setJobs(data);
        } catch (error) {
          console.log('error fetching the data', error);
        } finally {
          setLoading(false);
        }
      };
      fetchJobs();
    }, [isHome]);
  
    return { jobs, loading };
  };

export default usefetchData