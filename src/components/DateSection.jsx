import React from 'react'
import '../styling/DateSection.css'
const DateSection = () => {
  return (
    <div className='datemain'>
      <p className='pone'>Mark Your Calendar</p>
      <p className='ptwo'>Important Dates</p>
      <div className='dateboxes'>
        <div className='datebox'>
            <p className='datepone'>March 31, 2025</p>
            <p className='dateptwo'>flana dhimkana flana dhimkana</p>
        </div>
        <div className='datebox'>
            <p className='datepone'>March 31, 2025</p>
            <p className='dateptwo'>flana dhimkana flana dhimkana</p>
        </div>
        <div className='datebox'>
            <p className='datepone'>March 31, 2025</p>
            <p className='dateptwo'>flana dhimkana flana dhimkana</p>
        </div>
      </div>
    </div>
  )
}

export default DateSection
