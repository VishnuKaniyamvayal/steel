import SteelLogo from "./components/SteelLogo"
import WorkplaceButton from "./components/WorkplaceButton"

const WorkplaceSelector = () => {
  return (
    <div className="flex justify-between items-center w-full px-2 pb-2 pt-5">
        {/* Steel Logo */}
        <SteelLogo />
        {/* Workplace button */}
        <WorkplaceButton />
    </div>
  )
}

export default WorkplaceSelector