import { Header, SectionList, PlayMusic } from '.'
import '../css/App.css'
import { musicData } from '../data'
export function App() {
  const selectedMusic = musicData[2]
  return (
    <>
      <Header music={selectedMusic} />
      <section className='section-container'>
        <div className='section'>
          <SectionList />
        </div>
        <div className='section'>
          <PlayMusic music={selectedMusic} />
        </div>
      </section>
    </>
  )
}
