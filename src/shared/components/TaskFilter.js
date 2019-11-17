import React, { useState } from 'react'
import DatePicker from 'react-datetime'
import { loginContainer, loginBtn } from 'src/shared/components/style'

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
    <div css={loginContainer}>
      <h2>View Your previous tasks</h2>
        <label>Start Date</label>
        <DatePicker
          inputProps={{ placeholder: '' }}
          onChange={(date) => handleStartDateChange(date.valueOf())}
        />
        <label>End Date</label>
        <DatePicker
          inputProps={{ placeholder: '' }}
          onChange={(date) => handleEndDateChange(date.valueOf())}
        />
        <button css={loginBtn} onClick={() => submit(startDate, endDate)}>Show Tasks</button>
    </div>
  )
}
export default ReportFilter
