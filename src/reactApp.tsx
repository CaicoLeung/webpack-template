import Example from './react-hook-example/example'
import React from 'react'
import ReactDom from 'react-dom'

const App: React.FC = () => {
  return (
    <>
      <div>React frame content.</div>
      <Example/>
    </>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
