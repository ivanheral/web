import { cloneElement, ReactElement } from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

export type ActivelinkProps = LinkProps & {
  children: ReactElement
  activeClassName?: string
  className?: string
  href: string
}

const Activelink = ({ children, activeClassName, className, href, ...rest }: ActivelinkProps) => {
  const router = useRouter()
  const childClassName = className ?? ''
  const newClassName = `cursor-pointer ${childClassName} ${
    router.pathname == href ? (activeClassName ? activeClassName : 'text-gray-900') : ''
  }`
  return (
    <Link legacyBehavior href={href} passHref>
      <>{cloneElement(children, { className: newClassName, href, ...rest })}</>
    </Link>
  )
}

export default Activelink
