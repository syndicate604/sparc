import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { Terminal } from 'lucide-react'
import { commandList } from '../lib/commands'

export function CommandPicker({
  onCommandSelect,
}: {
  onCommandSelect: (command: string) => void
}) {
  return (
    <div className="flex flex-col">
      <Select
        name="command"
        onValueChange={(command) => onCommandSelect(command)}
      >
        <SelectTrigger className="whitespace-nowrap border-none shadow-none focus:ring-0 px-0 py-0 h-6 text-xs">
          <SelectValue placeholder="Commands" />
        </SelectTrigger>
        <SelectContent side="top">
          <SelectGroup>
            <SelectLabel>Commands</SelectLabel>
            {commandList.map((cmd) => (
              <SelectItem key={cmd.command} value={cmd.command}>
                <div className="flex items-center space-x-2">
                  <Terminal className="flex text-[#a1a1aa]" width={14} height={14} />
                  <span>{cmd.name}</span>
                </div>
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
