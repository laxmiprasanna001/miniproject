import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Location from '../../sidebar/Location';
import CreatableSelect from 'react-select/creatable';
// import { CreatableSelect } from 'react-select/dist/declarations/src/Creatable';
const CreateJob = () => {
  const [selectedOption,setSelectedOption]=useState(null);
    const {
        register,
        handleSubmit,reset,
        formState: { errors },
      } = useForm()
    
    const onSubmit = (data) =>{
        data.skills=selectedOption;
    //  console.log(data)
        fetch("http://localhost:5000/post-job",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(data)
        })
          .then(res=>res.json())
          .then((result) => {
            console.log(result)
            if(result.acknowledged===true){
            alert("Job Posted Successfully!");
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
                <input type='text' placeholder="Web Developer" {...register("jobTitle")} className='create-job-input'/>
            </div>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Name</label>
                <input type='text' placeholder='Ex: Microsoft' {...register("companyName")} className='create-job-input'/>
            </div>
        </div>
        <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Minimum Salary</label>
                <input type='text' placeholder="$20k" {...register("minPrice")} className='create-job-input'/>
            </div>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Maximum Salary</label>
                <input type='text' placeholder='$120k' {...register("maxPrice")} className='create-job-input'/>
            </div>
        </div>
        <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Salary Type</label>
                <select {...register("salaryType")} className='create-job-input'>
        <option value="">choose your salary</option>
        <option value="Hourly">Hourly</option>
        <option value="Monthly">Monthly</option>
        <option value="Yearly">Yearly</option>
      </select>
            </div>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Location</label>
                <input type='text' placeholder='Ex: Hyderabad' {...register("jobLocation")} className='create-job-input'/>
            </div>
        </div>
        <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Job Posting Date</label>
                <input type='date' placeholder="mm/dd/yyyy" {...register("jobPostingDate")} className='create-job-input'/>
            </div>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Level of Experience</label>
                <select {...register("experienceLevel")} className='create-job-input'>
        <option value="">choose your experience</option>
        <option value="Internship">Internship</option>
        <option value="NoExperience">NoExperience</option>
        <option value="Temporary">Work remotely</option>
      </select>
            </div>
        </div>
        <div className='create-job-flex'>
            <div className='w-full'>
                <label className='block mb-2 text-lg'>Required Skills:</label>
                <CreatableSelect defaultValue={selectedOption} onChange={setSelectedOption} options={options} isMulti className='create-job-input py-4'/>
            </div>
        </div>
        <div className='create-job-flex'>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>Company Logo</label>
                <input type='url' placeholder="paste your company log URL: https://example.com/img" {...register("companyLogo")} className='create-job-input'/>
            </div>
            <div className='lg:w-1/2 w-full'>
                <label className='block mb-2 text-lg'>EmploymentType</label>
                <select {...register("employmentType")} className='create-job-input'>
        <option value="">choose your type of employment</option>
        <option value="Full-time">Full-time</option>
        <option value="Part-time">Part-time</option>
        <option value="Temporary">Temporary</option>
      </select>
      </div>
      </div>
      <div>
      <div className='w-full'>
        <label className='block mb-2 text-lg'>Job Description</label>
        <textarea  rows={6} placeholder='Enter job description' {...register("description")} className='w-full pl-3 py-1.5 focus:outline-none'/>
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

export default CreateJob
