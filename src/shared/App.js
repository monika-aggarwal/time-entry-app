import React from 'react';
import ReactDOM from 'react-dom';
import connect from './connect'
import Login from './components/Login'
import AddItem from './components/AddItem'
import Report from './components/Report'
// import { checkLogin } from './actions/auth'
const projectList = [{
  key: 'project1',
  label: 'project 1'
}, {
  key: 'project2',
  label: 'project 2'
}, {
  key: 'project3',
  label: 'project 3'
}]
const App = ({ loggedIn }) => {
  if (!loggedIn) {
    return <Login />
  }
  return (
    <React.Fragment>
      <AddItem projectList={projectList} />
      <Report />
    </React.Fragment>
  )
}
const props = ({ auth: { loggedIn } }) => ({ loggedIn })
export default connect({ props })(App)
