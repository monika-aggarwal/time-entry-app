import React, { useState } from 'react'
import DatePicker from 'react-datetime'

const getStartDate = () => {
  let startDate = new Date()
  startDate.setDate(startDate.getDate() - 7)
  startDate.setHours(0, 0, 0)
  return startDate
}

const ReportFilter = ({ submit }) => {
  const [{
    startDate, endDate
  }, setState] = useState({
    startDate: getStartDate(),
    endDate: new Date()
  })

  const handleStartDateChange = (date) => {
    setState(prev => ({ ...prev, startDate: date }))
  }

  const handleEndDateChange = (date) => {
    if (date > startDate) {
      setState(prev => ({ ...prev, endDate: date }))
    }
  }

  return (
    <div className="report-filter">
      <div className="row">
        <DatePicker
          inputProps={{ placeholder: 'Start date' }}
          onChange={(date) => handleStartDateChange(date.valueOf())}
        />
        <DatePicker
          inputProps={{ placeholder: 'End date' }}
          onChange={(date) => handleEndDateChange(date.valueOf())}
        />
        <button onClick={() => submit(startDate, endDate)}>Fetch Tasks</button>
      </div>
    </div>
  )
}
export default ReportFilter