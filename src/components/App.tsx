import { Header, SectionList, PlayMusic } from '.'
import '../css/App.css'
// import PlayMusic from './PlayMusic'
export function App() {
  return (
    <>
      <Header />
      <section className='section-container'>
        <div className='section'>
          <SectionList />
        </div>
        <div className='section'>
          <PlayMusic />
          {/* <SectionPlay /> */}
        </div>
      </section>
    </>
  )
}
