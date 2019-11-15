import React from 'react';
import ReactDOM from 'react-dom';
import connect from './connect.js'
import Login from './Login.js'
import AddItem from './AddItem.js'
const App = ({ loggedIn }) => {
  if (!loggedIn) {
    return <Login />
  }
  return (
    <AddItem />
  )
}
const props = ({ loggedIn }) => ({ loggedIn })
export default connect({ props })(App)

// if (module.hot) {
//   module.hot.accept()
// }

// ReactDOM.render(<App />, document.getElementsByTagName('body')[0]) //
