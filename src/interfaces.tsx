export interface ISection {
  id: string
  image: string
  title: string
  icon: string
}
export interface ILeftSection {
  data: ILeftSectionCol[]
}
interface ILeftSectionCol {
  id: string
  key: string
  value: string
}
export interface ILink {
  id: string
  label: string
  href: string
}

// src/types/Music.ts
export interface Music {
  id: string
  src: string
  title: string
  description: string
  icon: string
}
