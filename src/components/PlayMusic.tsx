// import { musicData } from '../data'
import { images } from '../Images'
import '../css/PlayMusic.css'
import { SectionPlay } from './SectionPlay'
import { Progress } from './Progress'
import { IMusic } from '../data'
import { ReactElement } from 'react'

interface PlayMusicProps {
  music: IMusic
}
export function PlayMusic({ music }: PlayMusicProps): ReactElement {
  return (
    <section className='music-section'>
      <figure className='play-music'>
        <img className='play-music_img' src={music.src} alt='image' />
      </figure>
      <section className='play-wrapper'>
        <span className='material-symbols-outlined'>add_circle</span>
        <div className='wrap-content'>
          <h3 className='play-title'>{music.title}</h3>
          <p className='play-content'>{music.description}</p>
        </div>
        <span className='material-symbols-outlined'>favorite</span>
      </section>
      <Progress />
      <SectionPlay />
    </section>
  )
}
