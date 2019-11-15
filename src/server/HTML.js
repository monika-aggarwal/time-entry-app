// @flow
import React from 'react'

const HTML = ({
  children,
  header
}) => {
  return (
    <html lang='en'>
      <head>
        {header}
      </head>
      <body>
        <div id='app' className='app' dangerouslySetInnerHTML={{ __html: children }} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.__INITIAL_STATE__ = __STATE__`
          }}
        />
        <script type="text/javascript" src={`http://localhost:${process.env.WEBPACK_PORT || 8501}/bundle.js`} />
      </body>
    </html >)
}

export default HTML
