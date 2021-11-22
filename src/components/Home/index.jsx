import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = ({ pageNo, setPageNo }) => {
  const [image, setImage] = useState([])
  const [dataFull, setDataFull] = useState([])
  const [searchString, setSearchString] = useState('')
  // const [pageNo, setPageNo] = useState(0)

  const handleNext = () => {
    setPageNo((prev) => prev + 1)
    window.scrollTo(0, 0)
  }
  const handlePrev = () => {
    setPageNo((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleSearch = () => {
    fetch(
      `https://api.thecatapi.com/v1/breeds?api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setDataFull(data))
  }

  useEffect(() => {
    fetch(
      `https://api.thecatapi.com/v1/breeds?limit=12&page=${pageNo}&order=Asc&api_key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setImage(data))
  }, [pageNo])

  return (
    <div className='home'>
      <div className='searchWrapper'>
        <div className='search wrapper'>
          <div className='input-link'>
            <h2>Search the name of Breed</h2>
            <div className='searchBar'>
              <input
                name='cName'
                type='text'
                value={searchString}
                onChange={(e) => setSearchString(e.target.value.toLowerCase())}
                onFocus={handleSearch}
                placeholder='Eg: Abyssinian'
              />

              <i className='fa fa-search'></i>
            </div>
          </div>
        </div>
      </div>

      <div className='image'>
        <h2 className='cats'>Cat's Lists</h2>
        <div className='wrapper'>
          <div className='imgWrapper'>
            {image.length ? (
              (searchString.length ? dataFull : image)
                .filter((item) =>
                  item.name.toLowerCase().includes(searchString.trim())
                )
                .map(
                  (item, i) =>
                    item.image?.url && (
                      <Link
                        to={{
                          pathname: '/info',
                          state: {
                            name: item.name,
                            desc: item.description,
                            url: item.image.url,
                            org: item.origin,
                            life: item.life_span,
                            friendly: item.dog_friendly,
                            child_frd: item.child_friendly,
                            Energy: item.energy_level,
                            intell: item.intelligence,
                            temper: item.temperament,
                          },
                        }}
                        key={i}
                      >
                        <div className='catCard'>
                          <img src={item.image.url} alt='catimage' />
                          <div className='catName'>{item.name}</div>
                        </div>
                      </Link>
                    )
                )
            ) : (
              <p className='loadingImg'> Loading...</p>
            )}
          </div>
          {image.length && (
            <div
              className={`pagination ${searchString.length && 'pageHidden'}`}
            >
              <button disabled={pageNo === 0} onClick={handlePrev}>
                Prev
              </button>
              <span>
                <p>{pageNo + 1}</p>
              </span>
              <button disabled={pageNo === 5} onClick={handleNext}>
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default Home
