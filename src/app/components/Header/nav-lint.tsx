'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ComponentProps } from 'react'

type NavLinkProps = ComponentProps<typeof Link>

export function NavLink(props: NavLinkProps) {
  const pathname = usePathname()

  const isActive = pathname === props.href

  return (
    <Link
      data-active={isActive}
      className="text-muted-foreground text-sm font-bold transition hover:text-primary-foreground data-[active=true]:text-primary"
      {...props}
    />
  )
}
