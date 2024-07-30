// src/data/musicData.ts
import { IMusic } from './interfaces'
import { images } from './Images'

export const musicData: IMusic[] = [
  {
    id: '1',
    title: 'Bohemian Rhapsody',
    description: 'A Night at the Opera',
    src: images.one,
  },
  {
    id: '2',
    title: 'Stairway to Heaven',
    description: 'Led Zeppelin IV',
    src: images.two,
  },
  {
    id: '3',
    title: 'Hotel California',
    description: 'Hotel California',
    src: images.three,
  },
  {
    id: '4',
    title: 'Imagine',
    description: 'Imagine',
    src: images.four,
  },
  {
    id: '5',
    title: 'Smells Like Teen Spirit',
    description: 'Nevermind',
    src: images.five,
  },
  {
    id: '6',
    title: 'Billie Jean',
    description: 'Thriller',
    src: images.six,
  },
  {
    id: '7',
    title: 'Like a Rolling Stone',
    description: 'Highway 61 Revisited',
    src: images.seven,
  },
  {
    id: '8',
    title: 'Hey Jude',
    description: 'The Beatles Again',
    src: images.eight,
  },
  {
    id: '9',
    title: 'Purple Haze',
    description: 'Are You Experienced',
    src: images.nine,
  },
  {
    id: '10',
    title: 'What a Wonderful World',
    description: 'What a Wonderful World',
    src: images.ten,
  },
]

// export const links: ILink[] = [{ id: '1', title: 'Hello', i: 'more_vert' }]
// export const icons: IIcons = {
//   data: [
//     {
//       id: '1',
//       classes: 'material-symbols-outlined',
//       value: 'more_vert',
//     },
//     {
//       id: '2',
//       classes: 'material-symbols-outlined',
//       value: 'chevron_backward',
//     },
//     {
//       id: '3',
//       classes: 'material-symbols-outlined',
//       value: 'play_circle',
//     },
//     {
//       id: '4',
//       classes: 'material-symbols-outlined',
//       value: 'favorite',
//     },
//     {
//       id: '5',
//       classes: 'material-symbols-outlined',
//       value: 'fast_forward',
//     },
//     {
//       id: '6',
//       classes: 'material-symbols-outlined',
//       value: 'fast_rewind',
//     },
//     {
//       id: '7',
//       classes: 'material-symbols-outlined',
//       value: 'shuffle',
//     },
//     {
//       id: '8',
//       classes: 'material-symbols-outlined',
//       value: 'repeat',
//     },
//     {
//       id: '9',
//       classes: 'material-symbols-outlined',
//       value: 'chevron_left',
//     },
//   ],
// }
