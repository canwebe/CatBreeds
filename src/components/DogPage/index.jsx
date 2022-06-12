import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Dog.css'

const DogList = ({ countPage, setCountPage }) => {
  const [dogImages, setDogImages] = useState([])
  const [dogData, setDogData] = useState([])
  const [searchBreed, setSearchBreed] = useState('')

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
        setDogData(data)
      })
  }

  useEffect(() => {
    fetch(
      `https://api.thedogapi.com/v1/breeds?limit=12&page=${countPage}&order=asc&api_key=${process.env.REACT_APP_API_KEY2}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setDogImages(data)
      })
  }, [countPage])

  return (
    <div className='dogList'>
      <div className='searchWrapper'>
        <div className='search wrapper'>
          <div className='searchBar'>
            <input
              name='cName'
              type='text'
              value={searchBreed}
              onChange={(e) => setSearchBreed(e.target.value.toLowerCase())}
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
            {dogImages.length ? (
              (searchBreed.length ? dogData : dogImages)
                .filter((item) =>
                  item.name.toLowerCase().includes(searchBreed.trim())
                )
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
            ) : (
              <p className='loadingImg'>Loading...</p>
            )}
          </div>
          {dogImages.length && (
            <div className={`pagination ${searchBreed.length && 'pageHidden'}`}>
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
          )}
        </div>
      </div>
    </div>
  )
}

export default DogList
