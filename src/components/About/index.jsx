import React from 'react'
import './About.css'

const About = ({
  history: {
    location: { state },
  },
}) => (
  <div className='about wrapper'>
    {state && (
      <>
        <div className='container'>
          <img src={state.url} alt='fullimg' />

          {/* <h2>{state.name}</h2> */}
          <div className='content para'>
            <div className='catNameH2'>
              <h2>{state.name}</h2>
            </div>
            <div>
              <p>
                <b>Origin:</b>
                {state.org}
              </p>
            </div>
            <div className='gap20'>
              <p>
                <b>Life_span:</b>
                {state.life}
              </p>
            </div>
            <div>
              <p>
                <b>Dog_friendly:</b>
                {state.friendly}
              </p>
              <div className='progress'>
                <div className='progress-done'></div>
              </div>
            </div>
            <div>
              <p>
                <b>Child_friendly:</b>
                {state.child_frd}
              </p>
              <div className='progress'>
                <div className='progress-done'></div>
              </div>
            </div>
            <div>
              <p>
                <b>Energy_Level:</b>
                {state.Energy}
              </p>
              <div className='progress'>
                <div className='progress-done'></div>
              </div>
            </div>
            <div className='gap20'>
              <p>
                <b>Intelligence:</b>
                {state.intell}
              </p>
              <div className='progress'>
                <div className='progress-done'></div>
              </div>
            </div>
            <div>
              <p>
                <b>Temperament:</b>
                <br />
                {state.temper}
              </p>
            </div>
          </div>

          <p className='desc para'>
            <b>Description:</b>
            {state.desc}
          </p>
        </div>
      </>
    )}
  </div>
)

export default About
