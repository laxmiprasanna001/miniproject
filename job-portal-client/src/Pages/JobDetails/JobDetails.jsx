import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import PageHeader from './../../components/PageHeader/PageHeader';
import SalaryPage from './../SalaryPage/SalaryPage';
import Location from './../../sidebar/Location';
const JobDetails = () => {
    const {id}=useParams();
    const [job,setJob]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/all-jobs/${id}`).then(res=>res.json()).then(data=>setJob(data))
    },[id])
    console.log(id);
    const handleApply=async()=>{
        const { value: url } = await Swal.fire({
            input: "url",
            inputLabel: "URL address",
            inputPlaceholder: "Enter the URL"
          });
          if (url) {
            Swal.fire(`Entered URL: ${url}`);
          }
    }
  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <PageHeader title={job.jobTitle} path={"single job"}/>
        <div className='shadow mx-48 my-9 px-2 py-2'>
            <div className='grid grid-cols-2 gap-2 mx-8 my-8 items-center'>
              <h2 className='font-semibold text-xl'>Company</h2>
              <h1 className='my-2 font-medium text-blue text-lg'>{job.companyName}</h1>
              <h2 className='font-semibold text-xl'>Role</h2>
              <h1 className='my-2 font-medium text-blue text-lg'>{job.jobTitle}</h1>
              <h2 className='font-semibold text-xl'>Salary Range</h2>
              <h1 className='my-2 font-medium text-blue text-lg'>{job.minPrice}k-{job.maxPrice}k</h1>
              <h2 className='font-semibold text-xl'>Salary Type</h2>
              <h1 className='my-2 font-medium text-blue text-lg'>{job.salaryType}</h1>
              <h2 className='font-semibold text-xl'>Location</h2>
              <h1 className='my-2 font-medium text-blue text-lg'>{job.jobLocation}</h1>
              <h2 className='font-semibold text-xl'>Experience</h2>
              <h1 className='my-2 font-medium text-blue text-lg'>{job.experienceLevel}</h1>
              <h2 className='font-semibold text-xl'>Employment Type</h2>
              <h1 className='my-2 font-medium text-blue text-lg'>{job.employmentType}</h1>
              <h2 className='font-semibold text-xl'>Skills Required</h2>
              <h1 className='my-2 font-medium text-blue text-lg'>{job.skillsRequired}</h1>
              
            </div>
            <div className='mx-8 my-4 align-content-center'>
              <h2 className='font-semibold text-xl'>Job Description</h2>
              <p className='font-semibold text-blue text-lg'>{job.description}</p>
            </div>
            <div className='mx-28 my-4 align-content-center'>
              <button className='bg-blue mx-48 px-8 py-3 text-white align-items-center' onClick={handleApply}>Apply Now</button>
            </div>
            
        </div>
      
    </div>
  )
}

export default JobDetails
