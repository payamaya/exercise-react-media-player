import { ReactElement } from 'react'
import '../css/Header.css'
import { IMusic } from '../data'

interface HeaderProps {
  music: IMusic
}
export function Header({ music }: HeaderProps): ReactElement {
  return (
    <header className='header'>
      <span className='material-symbols-outlined span'>chevron_left</span>
      <h1>Playlist - {music.title}</h1>
      <span className='material-symbols-outlined span'>more_vert</span>
    </header>
  )
}
