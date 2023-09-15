import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Bell, Settings } from 'lucide-react'

export function Notifications() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          variant="outline"
          className="flex h-6 items-center space-x-1 rounded-full px-3 py-2"
        >
          <Bell size={12} />
          <span className="text-xs">12</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80" align="end">
        <header>
          <h1 className="mb-2 text-lg font-bold">Notifications</h1>
          <Tabs defaultValue="new">
            <TabsList>
              <TabsTrigger value="new">New</TabsTrigger>
              <TabsTrigger value="archvied">Archived</TabsTrigger>
            </TabsList>
          </Tabs>
        </header>
        <div className="my-4 flex flex-col gap-2">
          <div className="flex cursor-pointer gap-2 rounded-md p-2 transition-colors hover:bg-muted">
            <Avatar>
              <AvatarImage
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="RU"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">
                <strong className="block">John Doe</strong>
                created a new event with you
              </p>
              <time className="text-xs text-muted-foreground">
                14 minutes ago
              </time>
            </div>
          </div>
          <div className="flex cursor-pointer gap-2 rounded-md p-2 transition-colors hover:bg-muted">
            <Avatar>
              <AvatarImage
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="RU"
              />
              <AvatarFallback>MK</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm">
                <strong className="block">Mary Kristen</strong>
                subscribed to your service houston
              </p>
              <time className="text-xs text-muted-foreground">
                14 minutes ago
              </time>
            </div>
          </div>
        </div>
        <Separator />
        <footer className="mt-2 flex items-center justify-between">
          <Button variant="ghost">
            <Settings size={18} />
          </Button>
          <Button variant="outline">Archive all</Button>
        </footer>
      </PopoverContent>
    </Popover>
  )
}
