import '../css/Progress.css'
export function Progress() {
  return (
    <section className='progress'>
      <span className='span-left'>0.40</span>
      <input type='range' className='progress-bar' min={8} max={100} />
      <span className='span-right'>3.42</span>
    </section>
  )
}
