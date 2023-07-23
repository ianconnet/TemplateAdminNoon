import Divider from "./Divider"
import { useLocation, useNavigate } from "react-router-dom"

import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person'
import StoreIcon from '@mui/icons-material/Store'
import FolderCopyIcon from '@mui/icons-material/FolderCopy'
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import LogoutIcon from '@mui/icons-material/Logout'

const Drawer = ({ children }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const drawerOptions = [
        { name: "Dashboard", icon: <DashboardIcon fontSize="large" />, link: "/dashboard" },
        { name: "Buyers", icon: <PersonIcon fontSize="large" />, link: "/buyers" },
        { name: "Sellers", icon: <StoreIcon fontSize="large" />, link: "/sellers" },
        { name: "Projects", icon: <FolderCopyIcon fontSize="large" />, link: "/projects" },
        { name: "Project Requests", icon: <MoveToInboxIcon fontSize="large" />, link: "/project-requests" },
        { name: "Purchases", icon: <LocalMallIcon fontSize="large" />, link: "/purchases" },
        {
            name: "Sign out",
            icon: <LogoutIcon fontSize="large" />,
            link: () => {
                axios.get(`${API_BASE_URL}/logout`).then(_ => {
                    if (localStorage.getItem("USER_LOGGED_IN")) {
                        localStorage.clear("USER_LOGGED_IN")
                    }
                    navigate('/login')
                }).catch(_ => { })
            }
        },
    ]

    return (
        <div className="flex">
            <div className="w-72 border-r-[1px] border-gray-300 min-h-screen">
                <p className="text-center text-4xl py-10 font-bold text-navyblue">Carbon Credit</p>
                <Divider />
                {
                    drawerOptions.map(option => {
                        return (
                            <div key={option.name} onClick={() => typeof option.link === "function" ? option.link() : navigate(option.link)} className={`${location.pathname === option.link && "bg-navyblue text-white"} hover:bg-navyblue hover:text-white hover:cursor-pointer rounded-lg mt-2 mx-3 pl-8 py-2 transition-colors duration-200`}>
                                <div className="py-3 grid grid-cols-5 gap-x-4 items-center">
                                    <div>
                                        {option.icon}
                                    </div>
                                    <div className="col-span-4">
                                        {option.name}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <div className="flex-1">
                {children}
            </div>
        </div>
    )
}

export default Drawer 