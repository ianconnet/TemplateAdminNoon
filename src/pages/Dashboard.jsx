import {
    MdEmojiPeople,
    MdShoppingCart,
    MdDirectionsBike,
    MdDeliveryDining,
    MdToday,
} from "react-icons/md"
import { GiSofa } from "react-icons/gi"
import InfoCard from "../components/InfoCard"
import { useState } from "react"
import Spinner from "../components/Spinner"

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(false)

    return (
        <div className="min-h-screen flex justify-center items-center">
            {
                isLoading
                    ?
                    <Spinner spinnerText="Getting stats..." />
                    :
                    <div className="h-full flex-1 flex justify-center items-center">
                        <p>Dashboard</p>
                    </div>
            }
        </div>
    )
}

export default Dashboard