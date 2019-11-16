import react from 'react'
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from 'shared/App';
import Html from './HTML';
import { Provider } from 'react-redux'
import { checkLogin } from './registerServer'

export default async (req, res, next) => {
  const store = res.locals.store
  await store.dispatch(checkLogin())
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