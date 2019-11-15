import React from 'react';
import ReactDOM from 'react-dom';
import connect from './connect'
import Login from './components/Login'
import AddItem from './components/AddItem'

const App = ({ loggedIn }) => {
  if (!loggedIn) {
    return <Login />
  }
  return (
    <AddItem />
  )
}
const props = ({ auth: { loggedIn } }) => ({ loggedIn })
export default connect({ props })(App)