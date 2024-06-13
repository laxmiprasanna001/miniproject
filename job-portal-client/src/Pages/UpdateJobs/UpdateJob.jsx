import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useLoaderData, useParams} from 'react-router-dom'
import CreatableSelect from 'react-select/creatable';
import JobPostingData from '../../sidebar/JobPostingData';
const UpdateJob = () => {
    const [selectedOption,setSelectedOption] = useState(null);
    const {id} = useParams();
    const {_id,jobTitle,companyName,minPrice,maxPrice,salaryType,employmentType,experienceLevel,companyLogo,jobLocation,description,postingDate,postedBy,skillsRequired}=useLoaderData()
    const {
        register,
        handleSubmit,reset,
        formState: { errors },
      } = useForm()
    
    const onSubmit = (data) =>{
        data.skills=selectedOption;
    //  console.log(data)
        fetch(`http://localhost:5000/update-job/${id}`,{
            method:"PATCH",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
          .then(res=>res.json())
          .then((result) => {
            console.log(result)
            if(result.acknowledged===true){
            alert("Job Updated Successfully!");
            }
            reset();
        })
    }

    const options=[
        {value:"JavaScript",label: "JavaScript"},
        {value:"C++",label: "C++"},
        {value:"HTML",label: "HTML"},
        {value:"CSS",label: "CSS"},
        {value:"ReactJS",label: "ReactJS"},
        {value:"NodeJs",label: "NodeJs"},
        {value:"MongoDB",label: "MongoDB"},
        {value:"Express.Js",label: "Express.Js"},
      ]

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
    {/* form */}
    <div className='bg-[#FAFAFA] py-10 px-4 lg:px-16'>
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-5'>
      <div className='create-job-flex'>
          <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Job Title</label>
              <input type='text' defaultValue={jobTitle} {...register("jobTitle")} className='create-job-input'/>
          </div>
          <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Company Name</label>
              <input type='text' defaultValue={companyName} {...register("companyName")} className='create-job-input'/>
          </div>
      </div>
      <div className='create-job-flex'>
          <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Minimum Salary</label>
              <input type='text' defaultValue={minPrice} {...register("minPrice")} className='create-job-input'/>
          </div>
          <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Maximum Salary</label>
              <input type='text' defaultValue={maxPrice} {...register("maxPrice")} className='create-job-input'/>
          </div>
      </div>
      <div className='create-job-flex'>
          <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Salary Type</label>
              <select {...register("salaryType")} className='create-job-input'>
      <option value={salaryType}>{salaryType}</option>
      <option value="Hourly">Hourly</option>
      <option value="Monthly">Monthly</option>
      <option value="Yearly">Yearly</option>
    </select>
          </div>
          <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Job Location</label>
              <input type='text' defaultValue={jobLocation} {...register("jobLocation")} className='create-job-input'/>
          </div>
      </div>
      <div className='create-job-flex'>
          <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Job Posting Date</label>
              <input type='date' defaultValue={postingDate} {...register("jobPostingDate")} className='create-job-input'/>
          </div>
          <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Level of Experience</label>
              <select {...register("experienceLevel")} className='create-job-input'>
      <option value={experienceLevel}>{experienceLevel}</option>
      <option value="Internship">Internship</option>
      <option value="NoExperience">NoExperience</option>
      <option value="Temporary">Work remotely</option>
    </select>
          </div>
      </div>
      <div className='create-job-flex'>
          <div className='w-full'>
              <label className='block mb-2 text-lg'>Required Skills:</label>
              <CreatableSelect defaultValue={skillsRequired} onChange={setSelectedOption} options={options} isMulti className='create-job-input py-4'/>
          </div>
      </div>
      <div className='create-job-flex'>
          <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>Company Logo</label>
              <input type='url' defaultValue={companyLogo} {...register("companyLogo")} className='create-job-input'/>
          </div>
          <div className='lg:w-1/2 w-full'>
              <label className='block mb-2 text-lg'>EmploymentType</label>
              <select {...register("employmentType")} className='create-job-input'>
      <option value={employmentType}>{employmentType}</option>
      <option value="Full-time">Full-time</option>
      <option value="Part-time">Part-time</option>
      <option value="Temporary">Temporary</option>
    </select>
    </div>
    </div>
    <div>
    <div className='w-full'>
      <label className='block mb-2 text-lg'>Job Description</label>
      <textarea  rows={6} defaultValue={description} {...register("description")} className='w-full pl-3 py-1.5 focus:outline-none'/>
    </div>
    </div>
    <div>
      <label className='block mb-2 text-lg'>Job posted by</label>
      <input type='email' placeholder="name@gmail.com" {...register("postedBy")} className='create-job-input'/>
    </div>
    <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-8 py-2 rounded-sm cursor-pointer'/>
  </form>
    </div>
  </div>
  )
}

export default UpdateJob
