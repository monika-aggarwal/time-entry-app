import React, { useState, useRef } from 'react'
import { signOut, fetchList } from 'shared/actions/auth'
import { createEntry } from 'shared/actions/task'
import connect from 'shared/connect'
import PrintTask from './PrintTask'


const AddItem = ({ signOut, createEntry, fetchList, projectList }) => {
  const [{ name = '', project = '', started = false }, set] = useState({})
  const [{ startTime, count = 0 }, setTime] = useState({})
  const [taskList, setTaskList] = useState([])
  const ref = useRef(null)

  const setTaskData = (field, value) => {
    set(prev => ({ ...prev, [field]: value }))
  }
  const start = () => {
    setTaskData('started', true)
    setTime({ startTime: new Date().getTime(), count: 0 })
    ref.current = setInterval(() => {
      setTime(({ startTime, count = 0 }) => ({ startTime, count: count + 1 }))
    }, 1000)
  }

  const makeEntry = (task) => {
    setTaskList(prev => [...prev, task])
    createEntry(task)
  }

  const stop = () => {
    const endTime = new Date().getTime()
    setTaskData('started', false)
    clearInterval(ref.current)
    makeEntry({ name, project, startTime, endTime })
  }
  return (
    <div>
      <div onClick={() => { signOut() }}>sign out</div>
      <input
        type='text'
        onChange={({ target: { value } }) => setTaskData('name', value)}
        placeholder='add item name'
        value={name} />

      <select
        value={project}
        onChange={({ target: { value } }) => setTaskData('project', value)}>
        <option value=''>Select</option>
        {
          projectList.map(({ key, label }) => (<option value={key} key={key}>{label}</option>))
        }
      </select>

      <div>Timer: {count}</div>

      <button onClick={started ? stop : start}>{started ? 'stop' : 'start'}</button>
      {
        taskList && !!taskList.length && <PrintTask taskList={taskList} />
      }
    </div>
  )
}

const props = () => ({})
export default connect({ props, actions: { signOut, createEntry, fetchList } })(AddItem)