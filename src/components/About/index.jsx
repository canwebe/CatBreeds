import React, { useEffect } from 'react'
import './About.css'

const About = ({
  history: {
    location: { state },
  },
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='about wrapper'>
      {state && (
        <>
          <div className='container'>
            <img src={state.url} alt='fullimg' />

            {/* <h2>{state.name}</h2> */}
            <div className='middleInfo'>
              <div className='catNameH2'>
                <h2>{state.name}</h2>
              </div>
              <div className='content para'>
                <div className='topDesc'>
                  <div>
                    <p>
                      <b>Origin:</b> <br className='hidden' />
                      {state.org}
                    </p>
                  </div>
                  <div>
                    <p>
                      <b>Life_span:</b> <br className='hidden' />
                      {state.life}
                    </p>
                  </div>
                </div>
                <div className='middleDesc'>
                  <div className='meterBox'>
                    <p>
                      <b>Dog_friendly:</b>
                      {/* {state.friendly} */}
                    </p>
                    <div className='progress'>
                      <div
                        style={{
                          width: Math.round((state.friendly / 5) * 100) + '%',
                        }}
                        className='progress-done'
                      ></div>
                    </div>
                  </div>
                  <div className='meterBox'>
                    <p>
                      <b>Child_friendly:</b>
                      {/* {state.child_frd} */}
                    </p>
                    <div className='progress'>
                      <div
                        style={{
                          width: Math.round((state.child_frd / 5) * 100) + '%',
                        }}
                        className='progress-done'
                      ></div>
                    </div>
                  </div>
                  <div className='meterBox'>
                    <p>
                      <b>Energy_Level:</b>
                      {/* {state.Energy} */}
                    </p>
                    <div className='progress'>
                      <div
                        style={{
                          width: Math.round((state.Energy / 5) * 100) + '%',
                        }}
                        className='progress-done'
                      ></div>
                    </div>
                  </div>
                  <div className='meterBox'>
                    <p>
                      <b>Intelligence:</b>
                      {/* {state.intell} */}
                    </p>
                    <div className='progress'>
                      <div
                        style={{
                          width: Math.round((state.intell / 5) * 100) + '%',
                        }}
                        className='progress-done'
                      ></div>
                    </div>
                  </div>
                </div>
                <div className='bottomDesc'>
                  <div>
                    <p>
                      <b>Temperament:</b>
                      <br />
                      <span className='temp'>{state.temper}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className='desc para'>
              <b>Description:</b>
              {state.desc}
            </p>

            <a href={state.wikepedia} className='wikepedia-link'>
              <b>Wikepedia</b>
            </a>
          </div>
        </>
      )}
    </div>
  )
}

export default About
