import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

export type TabStripProps = {
    id: string,
    name: string,
    type: string,
    active?: boolean
    onCloseClick?: ()=>void
}

export function TabStrip({ onCloseClick, name, type, active }:TabStripProps){

    return (
        <div className={("flex items-center gap-2 justify-between bg-background border rounded-lg px-2 py-2")}>
            <div className="flex items-center gap-2">
                <Typography className="text-green-600" size={"span"}>{type}</Typography>
                <Typography size={"span"}>{name}</Typography>
            </div>
            <Button onClick={onCloseClick} size={"icon-xs"} variant={"ghost"}> <X /> </Button>
        </div>
    )
}