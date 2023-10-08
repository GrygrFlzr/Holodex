import { cn } from "@/lib/utils"
import { Button } from "@/shadcn/ui/button"
// import { ScrollArea } from "@/shadcn/ui/scroll-area"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
}

export function Sidebar({ className, id }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)} id={id}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Hololive
          </h2>
          <div className="space-y-1">
            <Button className="w-full justify-start" size='lg'>
              <div className="i-heroicons:home"></div>
              Home
            </Button>
            <Button className="w-full justify-start" size='lg'>
              <span className="i-heroicons:user-group"></span>
              Channels
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight" >
            Holodex
          </h2>
          <div className="space-y-1">
            <Button className="w-full justify-start" size='lg'>
              <span className="i-heroicons:rectangle-group"></span>
              Multiview
            </Button>
            <Button className="w-full justify-start" size='lg'>
              <span className="i-heroicons:queue-list"></span>
              Playlist
            </Button>
            <Button className="w-full justify-start" size='lg'>
              <span className="i-heroicons:musical-note"></span>
              Music
            </Button>
            <Button className="w-full justify-start" size='lg'>
              <span className="i-heroicons:cog-6-tooth"></span>
              Settings
            </Button>
            <Button className="w-full justify-start" size='lg'>
              <span className="i-heroicons:information-circle"></span>
              About
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">
            Favorites
          </h2>
          {/* <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {playlists?.map((playlist, i) => (
                <Button
                  key={`${playlist}-${i}`}
                  variant="ghost"
                  className="w-full justify-start font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <path d="M21 15V6" />
                    <path d="M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                    <path d="M12 12H3" />
                    <path d="M16 6H3" />
                    <path d="M12 18H3" />
                  </svg>
                  {playlist}
                </Button>
              ))}
            </div>
          </ScrollArea> */}
        </div>
      </div>
    </div>
  )
}