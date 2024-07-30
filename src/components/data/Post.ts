import { IPost } from '../../interfaces'

export const post: IPost[] = [
  {
    author: {
      name: 'Bob Marley',
      content: 'No women no cry',
    },
    id: '1',
    image: '../../assets/one.jpg',
    timestamp: new Date('2990-03-12').getTime(),
  },
]
