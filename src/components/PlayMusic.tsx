import { musicData } from '../data'
import { images } from '../Images'
import '../css/PlayMusic.css'
import { SectionPlay } from './SectionPlay'
import { Progress } from './Progress'

export function PlayMusic() {
  return (
    <section className='music-section'>
      <figure className='play-music'>
        <img className='play-music_img' src={images.one} alt='image' />
      </figure>
      <section className='play-wrapper'>
        <span className='material-symbols-outlined'>add_circle</span>
        <div className='wrap-content'>
          <h3 className='play-title'>{musicData[0].title}</h3>
          <p className='play-content'>{musicData[0].description}</p>
        </div>
        <span className='material-symbols-outlined'>favorite</span>
      </section>
      <Progress />
      <SectionPlay />
    </section>
  )
}
