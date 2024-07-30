// export interface IImages {
//   one: string
//   two: string
//   three: string
//   four: string
//   five: string
//   six: string
//   seven: string
//   eight: string
//   nine: string
//   ten: string
// }
export interface IMusic {
  id: string
  src: string
  title: string
  description: string
  // iconSection: string[]
}
// export interface ILink {
//   id: string | number
//   title: string
//   src: string
//   description: string
//   icon: IIcons
// }

export interface IIcons {
  data: IIconList[]
}

export interface IIconList {
  id: string
  classes: string
  value: string
}
//NOTE create list for icons to choose from

export interface IAuthor {
  name: string
  content: string
}
export interface IPost {
  id: string
  author: IAuthor
  image: string
  timestamp: number
}
