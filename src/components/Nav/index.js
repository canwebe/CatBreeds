import React from 'react'
import cat1 from '../../img/twocat.png'
import cat2 from '../../img/threecatwow.png'

const Nav = () => {
  return (
    <nav>
      <div className='wrapper'>
        <div className='nav'>
          <img className='navCat' src={cat2} alt='' />
          <a href='/'>CATManual</a>
          <img className='navCat' src={cat1} alt='' />
        </div>
      </div>
    </nav>
  )
}

export default Nav
