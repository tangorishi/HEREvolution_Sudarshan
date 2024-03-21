import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCar, faLocationDot, faUsersLine} from '@fortawesome/free-solid-svg-icons'
import {faBuilding} from "@fortawesome/free-regular-svg-icons";

const titleToIconMap = {
    "Places": faLocationDot,
    "Hotels": faBuilding,
    "Rentals": faCar,
    "Attractions": faUsersLine
}
export default function HeaderTab({title, active, onClick}) {
    return <div
        className={"rounded-full flex gap-2 max-w-fit py-1 px-2.5 items-center font-medium cursor-pointer hover:bg-white/10 " + (active ? "border border-white bg-white/10" : "")}>
        <FontAwesomeIcon icon={titleToIconMap[title]} className="text-white"/>
        <div className="text-md" onClick={onClick}>{title}</div>
    </div>
}