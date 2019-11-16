var firebase = require("firebase-admin")
import config from './config.json'
let instance
const init = () => {
  firebase.initializeApp({
    credential: firebase.credential.cert(config),
    databaseURL: "https://time-entry-app.firebaseio.com"
  })
  const auth = firebase.auth()
  const db = firebase.database()
  instance = {auth, db}
}
const getItems = (res) => {
  instance.db.ref('entries').on("value", function(snapshot) {
    const a = snapshot.val()
    console.log(a)
    res.json(a)

  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code)
  })
}
const addItem = (item) => {
  return instance.db.ref('entries').set(item)
}

const addUser = (user) => {
  return instance.db.ref('users').set(user)
}
export default (app) => {
  init()
  app.get('/add-item', (req, res) => {
    addItem(req.query).then(r => res.json(r))
  })
  app.get('/add-user', (req, res) => {
    addUser(req.query).then(r => res.json(r))
  })
  app.get('/get-items', (req, res) => {
    console.log('sdfksdh')
    res.json(getItems(res))
  })
}
