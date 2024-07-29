import { ReactElement } from 'react'
import { ILink } from '../interfaces'

interface ILinkProps {
  link: ILink
}

export function Link({ link }: ILinkProps): ReactElement {
  return (
    <a className='link' href={link.href}>
      {link.label}
    </a>
  )
}
