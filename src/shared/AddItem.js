import React, { useState, useRef } from 'react'
const AddItem = () => {
  const [{ name = '', project = '', started = false }, set] = useState({})
  const [{ time, count = 0 }, setTime] = useState({})
  const [data, setDta] = useState([])
  const ref = useRef(null)
  const start = () => {
    setTime({ time: new Date(), count: 0 })
    set(data => ({ ...data, started: true }))
    ref.current = setInterval(() => {
      setTime(({ time, count = 0 }) => ({ time, count: count + 1 }))
    }, 1000)
  }
  const makeEntry = (item) => {
    setDta(data => [...data, item])
  }
  const stop = () => {
    clearInterval(ref.current)
    makeEntry({ name, project, startTime: time, count })
    set(data => ({ ...data, started: false }))
    setTime({})

  }
  const setData = (data) => set(dta => ({ ...dta, ...data }))
  return (
    <div>
      <input type='text' onChange={e => setData({ name: e.target.value })} placeholder='add item name' value={name} />
      <select value={project} onChange={e => setData({ project: e.target.value })}>
        <option value=''>Select</option>
        <option value='project1'>project 1</option>
        <option value='project2'>project 2</option>
        <option value='project3'>project 3</option>
      </select>
      <div>timer: {count}</div>
      <button onClick={started ? stop : start}>{started ? 'stop' : 'start'}</button>
      <table><tbody>
        {data.map(({ name, project, startTime, count }) => <tr key={startTime}>
          <td>{name}</td>
          <td>{project}</td>
          <td>{startTime.toGMTString()}</td>
          <td>{count}</td>
        </tr>)}
      </tbody></table>
    </div>
  )
}
export default AddItem