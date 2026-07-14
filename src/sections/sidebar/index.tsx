import { Separator } from "@/components/ui/separator"
import Collections from "./collections"
import WorkplaceSelector from "./workplace-selector"

const Sidebar = () => {
  return (
    <div className="h-screen">
        <WorkplaceSelector />
        <Separator />
        <Collections />
    </div>
  )
}

export default Sidebar