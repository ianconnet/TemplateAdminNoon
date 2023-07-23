const Table = (props) => {
    // Default columns are 6
    let gridColumns = "grid-cols-6"

    // Due to some weird behavior, have to use switch statement
    switch(props.tableHeader.length) {
        case 1:
            gridColumns = "grid-cols-1"
            break

        case 2:
            gridColumns = "grid-cols-2"
            break

        case 3:
            gridColumns = "grid-cols-3"
            break

        case 4:
            gridColumns = "grid-cols-4"
            break

        case 5:
            gridColumns = "grid-cols-5"
            break

        case 6:
            gridColumns = "grid-cols-6"
            break

        case 7:
            gridColumns = "grid-cols-7"
            break

        case 8:
            gridColumns = "grid-cols-8"
            break

        case 9:
            gridColumns = "grid-cols-9"
            break

        case 10:
            gridColumns = "grid-cols-10"
            break

        case 11:
            gridColumns = "grid-cols-11"
            break

        case 12:
            gridColumns = "grid-cols-12"
            break
    }

    return (
        <>
            <div className={`w-full grid ${gridColumns} mx-5 bg-green-500 text-white font-semibold rounded-tl-lg rounded-tr-lg`}>
                {
                    props.tableHeader.map((tableColumn, idx) => {
                        return (
                            <p className={`flex items-center justify-center border-r-[1px] h-full ${(idx === 0) && "py-3"}`}>{tableColumn}</p>
                        )
                    })
                }
            </div>
            {
                props.tableData.map(tableRow => {
                    return (
                        <div className={`w-full grid ${gridColumns} mx-5 bg-slate-50 text-center border-l-[1px] border-r-[1px] border-b-[1px] border-b-gray-400`}>
                            {
                                tableRow.map((colData, idx) => {
                                    return (
                                        typeof colData === "string"
                                        ?
                                        <p className={`flex items-center justify-center ${(idx != tableRow.length - 1) && "border-r-[1px]"} ${(idx === tableRow.length - 1) && "font-bold"} border-gray-400 h-full py-3`}>{colData}</p>
                                        :
                                        colData
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </>
    )
}

export default Table