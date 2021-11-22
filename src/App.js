import React, { useState } from 'react'
import Home from './components/Home/index'
import { Switch, Route } from 'react-router-dom'
import About from './components/About'
import Nav from './components/Nav'
const App = () => {
  const [pageNo, setPageNo] = useState(0)
  return (
    <>
      <Nav />
      <Switch>
        <Route
          path='/'
          exact
          render={() => <Home pageNo={pageNo} setPageNo={setPageNo} />}
        />
        <Route path='/info' exact component={About} />
      </Switch>
    </>
  )
}

export default App
