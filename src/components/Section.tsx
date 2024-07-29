import { ReactElement } from 'react'
import musicData from '../data'
export function Section(): ReactElement {
  return (
    <>
      {musicData.map((music) => {
        return (
          <section className='section'>
            <div className='img-content'>
              <img src={music.src} alt='' />
              <div className='section-wrapper'>
                <h4>{music.title}</h4>
                <p>{music.description}</p>
              </div>
            </div>
            <i className='material-symbols-outlined icon'>{music.icon}</i>
          </section>
        )
      })}
    </>
  )
}
