import React from 'react'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

const Nav = ({ history }) => {
  console.log(history)
  return (
    <nav>
      <div className='nav-wrapper'>
        <div className='nav'>
          <div
            onClick={() => history.goBack()}
            className={`back ${
              history.location.pathname === '/info' && 'visible'
            }`}
          >
            <i class='fa fa-arrow-left' aria-hidden='true'></i>
          </div>

          <a href='/'>BreedsInfo</a>
        </div>
      </div>
      <div className='nav-link'>
        <NavLink
          to='/'
          exact
          activeClassName='active-link'
          className='nav-item divider'
        >
          Cats
        </NavLink>
        <NavLink
          to='/dog'
          exact
          activeClassName='active-link'
          className='nav-item'
        >
          Dogs
        </NavLink>
      </div>
    </nav>
  )
}

export default withRouter(Nav)
