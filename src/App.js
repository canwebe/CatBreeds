import React, { useState } from 'react'
import Home from './components/Home/index'
import { Switch, Route } from 'react-router-dom'
import About from './components/About'
import Nav from './components/Nav'
import DogList from './components/DogPage'
import DogInfo from './components/DogInfo'

const App = () => {
  const [pageNo, setPageNo] = useState(0)
  const [countPage, setCountPage] = useState(0)

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
        <Route
          path='/dog'
          exact
          render={() => (
            <DogList countPage={countPage} setCountPage={setCountPage} />
          )}
        />
        <Route path='/doginfo' exact component={DogInfo} />
      </Switch>
    </>
  )
}

export default App
