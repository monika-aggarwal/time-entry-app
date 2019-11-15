module.exports = () => {
  // process.env.NODE_ENV = 'development'
  return [require('./client.js'), require('./server.js')]
}
