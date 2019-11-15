import react from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from 'shared/App';
import Html from './HTML';
import { Provider } from 'react-redux'
export default (req, res, next) => {

  const routerContext = {}
  const content = renderToString(
    <Provider store={res.locals.store}>
      <Router location={req.url} context={routerContext}>
        <App />
      </Router>
    </Provider>
  )
  const state = res.locals.store.getState()
  return res.send(
    '<!doctype html>' +
    renderToString(
      <Html>
        {content}
      </Html>
    ).replace('__STATE__', JSON.stringify(state).replace(/</g, '\\u003c'))
  )
}