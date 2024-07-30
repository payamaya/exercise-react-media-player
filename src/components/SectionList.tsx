import { ReactElement } from 'react'
import { musicData } from '../data'
import '../css/SectionList.css'

export function SectionList(): ReactElement {
  return (
    <>
      {musicData.map((music) => {
        return (
          <section className='section-list' key={music.id}>
            <div className='img-content'>
              <img className='img-size' src={music.src} alt='' />
              <div className='section-wrapper'>
                <h4 className='title'>{music.title}</h4>
                <p className='description'>{music.description}</p>
              </div>
            </div>
            <span className='material-symbols-outlined icon span'>
              play_circle
            </span>
          </section>
        )
      })}
    </>
  )
}
