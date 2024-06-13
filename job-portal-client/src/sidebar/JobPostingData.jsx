import React from 'react'
import InputField from './../components/InputField/inputField';

const JobPostingData = ({handleChange}) => {
    const now=new Date();
    const twentyFourHoursAgo=new Date(now -24*60*60*1000);  //milliseconds in a day, so this is 24 hours ago
    const SevenDaysAgo=new Date(now -7*24*60*60*1000);   //this will be the default value for " 7 days ago "
    const ThirtyDaysAgo=new Date(now -30*24*60*60*1000);  //this will be the default value for " 30 days ago "
    // console.log(now,twentyFourHoursAgo,SevenDaysAgo,ThirtyDaysAgo);
    const twentyFourHoursAgoDate=twentyFourHoursAgo.toISOString().slice(0,10);
    const SevenDaysAgoDate=SevenDaysAgo.toISOString().slice(0,10);
    const ThirtyDaysAgoDate=ThirtyDaysAgo.toISOString().slice(0,10);
    console.log(twentyFourHoursAgoDate);

  return (
    <div>
    <h4 className='text-lg font-medium mb-2'>Date of Posting</h4>
    <div>
    <label className='sidebar-label-container'>
    <input 
    type="radio" 
    name="test" 
    value="" 
    onChange={handleChange}
  />
  <span className='checkmark'></span>All
    </label>

    <InputField 
      handleChange={handleChange} 
      value={twentyFourHoursAgo}
      title="Last 24 Hours"
      name="test"
    />

<InputField 
      handleChange={handleChange} 
      value={SevenDaysAgoDate}
      title="Last 7 days"
      name="test"
    />

<InputField 
      handleChange={handleChange} 
      value={ThirtyDaysAgoDate}
      title= "Last Month"
      name="test"
    />

    </div>
  </div>
  )
}

export default JobPostingData
