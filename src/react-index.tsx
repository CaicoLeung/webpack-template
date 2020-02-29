import * as React from 'react'
import * as ReactDom from 'react-dom'

const App: React.FC = () => {
  return (
    <div>React frame content.</div>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
