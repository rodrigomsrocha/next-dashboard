import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { StoreSwitcher } from './store-switcher'
import { Separator } from '@/components/ui/separator'
import { NavLink } from './nav-lint'
import { Notifications } from './notifications'

export function Header() {
  return (
    <header className="border-foreground-100 grid w-full grid-cols-3 items-center border-b px-6 py-4">
      <div className="flex items-center space-x-4">
        <h1>NextDash</h1>
        <Separator className="h-6" orientation="vertical" />
        <StoreSwitcher />
      </div>
      <nav className="flex gap-4 justify-self-center">
        <NavLink href="#">Services</NavLink>
        <NavLink href="#">Transactions</NavLink>
        <NavLink href="#">Reports</NavLink>
      </nav>
      <div className="flex gap-4 justify-self-end">
        <Notifications />
        <Avatar>
          <AvatarImage
            src="https://github.com/rodrigomsrocha.png"
            alt="Rodrigo"
          />
          <AvatarFallback>RM</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
