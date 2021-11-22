import React from 'react'
import cat1 from '../../img/twocat.png'
import cat2 from '../../img/threecatwow.png'
import { withRouter } from 'react-router-dom'
const Nav = ({ history }) => {
  console.log(history)
  return (
    <nav>
      <div className='wrapper'>
        <div className='nav'>
          <div
            onClick={() => history.goBack()}
            className={`back ${
              history.location.pathname === '/info' && 'visible'
            }`}
          >
            back
          </div>
          <img className='navCat' src={cat2} alt='' />
          <a href='/'>CATManual</a>
          <img className='navCat' src={cat1} alt='' />
        </div>
      </div>
    </nav>
  )
}

export default withRouter(Nav)
