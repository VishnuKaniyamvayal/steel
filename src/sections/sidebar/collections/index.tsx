import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Explorer } from "./components"


const Collections = () => {
  return (
    <div className="p-3">
      <div className="flex justify-between items-center px-3 py-2">
        <Typography className="font-semibold" size={"h5"} > Collections </Typography>
        <Button size={"icon"} variant="ghost"> <Plus /> </Button>
      </div>
      <Explorer />

    </div>
  )
}

export default Collections