import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function StoreSwitcher() {
  return (
    <div className="flex items-center gap-4">
      <strong>Store:</strong>
      <Select defaultValue="all">
        <SelectTrigger className="w-52">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="dark">Tem sim</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
