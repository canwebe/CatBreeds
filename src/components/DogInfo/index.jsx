import React from 'react'
import './DogInfo.css'

const DogInfo = ({
  history: {
    location: { state },
  },
}) => {
  return (
    <div className='about wrapper'>
      <div className='dogInfo'>
        {state && (
          <div className='details'>
            <img src={state.url} alt='Img' />
            <div className='card'>
              <h2 className='breedName'>{state.name}</h2>
              <div className='dogDesc'>
                <p className='temper'>
                  <b>Temperament: </b>
                  <span className='data'>{state.temper}</span>
                </p>
                <p className='bred-for'>
                  <b>Bred_for: </b>
                  <span className='data'>{state.bred_for}</span>
                </p>

                <p className='weight'>
                  <b>Weight: </b>
                  <span className='data'>{state.weight} metric</span>
                </p>
                <p className='height'>
                  <b>Height: </b>
                  <span className='data'>{state.height} metric</span>
                </p>
                <p className='life'>
                  <b>Life_span: </b>
                  <span className='data'>{state.life}</span>
                </p>
                <p className='origin'>
                  <b>Origin: </b>
                  <span className='data'>{state.org}</span>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DogInfo
