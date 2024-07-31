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
export type { IMusic }
