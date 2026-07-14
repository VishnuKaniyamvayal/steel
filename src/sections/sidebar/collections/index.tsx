import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"

const Collections = () => {
  return (
    <div className="">
        <div className="flex justify-between items-center px-3 py-2">
            <h4 className="text-muted-foreground">Collections</h4>
            <Button size={"icon"} variant="ghost"> <Plus /> </Button>
        </div>
    </div>
  )
}

export default Collections