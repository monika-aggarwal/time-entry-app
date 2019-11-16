import react, { Fragment } from 'react'

const PrintTask = ({ taskList }) => {
  return (
    <Fragment>
      <table>
        <tbody>
          <tr>
            <th> Task Name</th>
            <th> Project Name</th>
            <th> Start Time</th>
            <th> End Time</th>
          </tr>
          {taskList.map(({ name, project, startTime, endTime }) =>
            <tr key={startTime}>
              <td>{name}</td>
              <td>{project}</td>
              <td>{new Date(startTime).toLocaleString()}</td>
              <td>{new Date(endTime).toLocaleString()}</td>
            </tr>)}
        </tbody>
      </table>
    </Fragment>
  )
}

export default PrintTask