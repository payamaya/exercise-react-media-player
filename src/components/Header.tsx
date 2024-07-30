import { ReactElement } from 'react'
import '../css/Header.css'

export function Header(): ReactElement {
  return (
    <header className='header'>
      <span className='material-symbols-outlined span'>chevron_left</span>
      <h1>Playlist - Moody</h1>
      <span className='material-symbols-outlined span'>more_vert</span>
      {/* <span className='material-symbols-outlined'> play_arrow </span>
      <span className='material-symbols-outlined'>play_circle</span>
      <span className='material-symbols-outlined'>add_circle</span>
      <span className='material-symbols-outlined'>favorite</span>
      <span className='material-symbols-outlined'>fast_forward</span>
      <span className='material-symbols-outlined'>fast_rewind</span>
      <span className='material-symbols-outlined'>shuffle</span>
      <span className='material-symbols-outlined'>repeat</span> */}
    </header>
  )
}
