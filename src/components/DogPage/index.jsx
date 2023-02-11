import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Dog.css'

const DogList = ({ countPage, setCountPage }) => {
  const [data, setData] = useState([])
  const [searchData, setSearchData] = useState([])
  const [inputSearch, setInputSearch] = useState('')
  const [filtered, setFiltered] = useState()

  const handleNextPage = () => {
    setCountPage((prev) => prev + 1)
    window.scrollTo(0, 0)
  }

  const handlePrevPage = () => {
    setCountPage((prev) => prev - 1)
    window.scrollTo(0, 0)
  }

  const handleImageSearch = () => {
    fetch(
      `https://api.thedogapi.com/v1/breeds?api_key=${process.env.REACT_APP_API_KEY2}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setSearchData(data)
      })
  }

  useEffect(() => {
    fetch(
      `https://api.thedogapi.com/v1/breeds?limit=12&page=${countPage}&order=asc&api_key=${process.env.REACT_APP_API_KEY2}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
      })
  }, [countPage])


  useEffect(() => {
    const filterData = searchData.filter((item) =>
      item.name.toLowerCase().includes(inputSearch.trim())
    )
    setFiltered(filterData)
    console.log("wqwq", filterData);
  }, [inputSearch])

  return (
    <div className='dogList'>
      <div className='searchWrapper'>
        <div className='search wrapper'>
          <div className='searchBar'>
            <input
              name='cName'
              type='text'
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value.toLowerCase())}
              onFocus={handleImageSearch}
              placeholder='Enter the Breed name...'
            />
            <i className='fa fa-search'></i>
          </div>
        </div>
      </div>

      <div className='img-container'>
        <h2 className='dog-header'>Dog's List</h2>
        <div className='dogImgWrapper'>
          <div className='dogImage '>
            {inputSearch.length ? filtered.length > 0 ? (
              filtered
                .map(
                  (item) =>
                    item.image?.url && (
                      <Link
                        to={{
                          pathname: '/doginfo',
                          state: {
                            name: item.name,
                            url: item.image.url,
                            height: item.height.metric,
                            bred_for: item.bred_for,
                            org: item.country_code,
                            life: item.life_span,
                            temper: item.temperament,
                            weight: item.weight.metric,
                          },
                        }}
                        key={item.id}
                      >
                        <div className='dogCard'>
                          <img src={item.image.url} alt='dogimage' />
                          <div className='dogName'>{item.name}</div>
                        </div>
                      </Link>
                    )
                )
            ) : <div className='no-result'> No Result Found </div> : (
              data
                .map(
                  (item) =>
                    item.image?.url && (
                      <Link
                        to={{
                          pathname: '/doginfo',
                          state: {
                            name: item.name,
                            url: item.image.url,
                            height: item.height.metric,
                            bred_for: item.bred_for,
                            org: item.country_code,
                            life: item.life_span,
                            temper: item.temperament,
                            weight: item.weight.metric,
                          },
                        }}
                        key={item.id}
                      >
                        <div className='dogCard'>
                          <img src={item.image.url} alt='dogimage' />
                          <div className='dogName'>{item.name}</div>
                        </div>
                      </Link>
                    )
                )
            )}
          </div>
          {data.length && filtered.length > 0 ? (
            <div className={`pagination ${inputSearch.length && 'pageHidden'}`}>
              <button disabled={countPage === 0} onClick={handlePrevPage}>
                Prev
              </button>
              <span>
                <p>{countPage + 1}</p>
              </span>
              <button disabled={countPage === 14} onClick={handleNextPage}>
                Next
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default DogList
