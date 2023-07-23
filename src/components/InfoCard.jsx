const InfoCard = ({ name, icon, stat }) => {
    return (
        <div className="bg-green-500 px-3 py-5 rounded text-white shadow-md">
            <div className="flex justify-between items-center">
                <div className="border-r-[1px] mr-2 px-1">
                    {icon}
                </div>
                <div className="flex flex-1 flex-col items-center justify-center">
                    <p className="text-xl">{name}</p>
                    <p className="text-3xl font-bold">{stat}</p>
                </div>
            </div>
        </div>
    )
}

export default InfoCard