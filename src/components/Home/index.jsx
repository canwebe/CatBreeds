import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

const Home = ({ pageNo, setPageNo }) => {
  const [image, setImage] = useState([])
  const [dataFull, setDataFull] = useState([])
  const [searchString, setSearchString] = useState('')
  const [catFiltered, setCatFiltered] = useState()
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

  useEffect(() => {
    const filterData = dataFull.filter((item) =>
      item.name.toLowerCase().includes(searchString.trim())
    )
    setCatFiltered(filterData)
    console.log("wqwq", catFiltered);
  }, [searchString])

  return (
    <div className='home'>
      <div className='searchWrapper'>
        <div className='search wrapper'>
          <div className='searchBar'>
            <input
              name='cName'
              type='text'
              value={searchString}
              onChange={(e) => setSearchString(e.target.value.toLowerCase())}
              onFocus={handleSearch}
              placeholder='Enter the Breed(eg: Abyssinian)'
            />

            <i className='fa fa-search'></i>
          </div>
        </div>
      </div>

      <div className='image'>
        <h2 className='cats'>Cat's Lists</h2>
        <div className='wrapper'>
          <div className='imgWrapper'>
            {searchString.length ? catFiltered.length > 0 ? (
              catFiltered
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
                            wikepedia: item.wikipedia_url,
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
            ) : <div className='no-result'> No Result Found </div> : (
              image
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
                            wikepedia: item.wikipedia_url,
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
            )}
          </div>
          {image.length && catFiltered.length > 0 ? (
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
          ) : null }
        </div>
      </div>
    </div>
  )
}
export default Home
