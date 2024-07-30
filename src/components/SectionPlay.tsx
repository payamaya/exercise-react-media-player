import { ReactElement } from 'react'
import '../css/SectionPlay.css'
// import { Progress } from './Progress'
export function SectionPlay(): ReactElement {
  return (
    <>
      {/* <Progress /> */}
      {/* <div className='section-Wrap'> */}
      <section className='section-play'>
        <span className='material-symbols-outlined playBtnSmall'>repeat</span>
        <span className='material-symbols-outlined playBtnSmall'>
          fast_rewind
        </span>
        <span className='material-symbols-outlined playBtn'>play_circle</span>
        <span className='material-symbols-outlined playBtnSmall'>
          fast_forward
        </span>
        <span className='material-symbols-outlined shuffleBtn'>shuffle</span>
      </section>
      {/* </div> */}
    </>
  )
}
