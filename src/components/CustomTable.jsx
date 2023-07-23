import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { MenuItem, Select } from '@mui/material';

const CustomTable = (props) => {
    const styles = {
        tableCellText: "center",
        tableCellStyle: {
            borderLeft: "1px solid #ccc",
            borderRight: "1px solid #ccc",
            padding: "0 40px",
            fontSize: 14,
        },
        orderStatusStyle: {
            color: "green",
            fontWeight: "bold"
        }
    }

    return (
        <div>
            <TableContainer component={Paper} sx={{
                width: {
                    sm: 500,
                    md: 600,
                    lg: 1000,
                    xl: 1400
                }
            }}>
                <Table>
                    <TableHead>
                        <TableRow className='bg-slate-700'>
                            {
                                props.tableHeader
                                &&
                                props.tableHeader.map(column => {
                                    return <TableCell align="center" style={{
                                        color: "white",
                                        fontWeight: 'bold',
                                        fontSize: 17,
                                        borderRight: "1px solid #ccc"
                                    }}>{column}</TableCell>
                                })
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.tableData
                            &&
                            props.tableData.map(rowData => {
                                return (
                                    <TableRow key={rowData.customerId} style={{
                                        paddingTop: "10px"
                                    }}>
                                        <TableCell align={styles.tableCellText} style={styles.tableCellStyle}>{rowData._id}</TableCell>
                                        <TableCell align={styles.tableCellText} style={styles.tableCellStyle}>{rowData.customerId}</TableCell>
                                        <TableCell align={styles.tableCellText} style={styles.tableCellStyle}>
                                            <button className="bg-green-600 hover:bg-green-500 w-32 py-4 rounded-md text-white my-5">
                                                View Products
                                            </button>
                                        </TableCell>
                                        <TableCell align={styles.tableCellText} style={styles.tableCellStyle}>
                                            <Select
                                                displayEmpty
                                                style={{ minWidth: '150px' }}
                                            >
                                                {
                                                    props.riders
                                                    &&
                                                    props.riders.map(rider => {
                                                        <MenuItem value={rider.email}>{rider.name}</MenuItem>
                                                    })
                                                }
                                            </Select>
                                        </TableCell>
                                        <TableCell align={styles.tableCellText} style={styles.orderStatusStyle}>
                                            {/* <Select
                                                style={{ minWidth: '200px' }}
                                                defaultValue={}
                                            >
                                                <MenuItem id="Preparing Basket" name="Preparing Basket" value="Preparing Basket">Preparing Basket</MenuItem>
                                                <MenuItem id="Ready for Pickup" name="Ready for Pickup" value="Ready for Pickup">Ready for Pickup</MenuItem>
                                                <MenuItem id="Rider on the way" name="Rider on the way" value="Rider on the way">Rider on the way</MenuItem>
                                                <MenuItem id="Delivered" name="Delivered" value="Delivered">Delivered</MenuItem>
                                            </Select> */}
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default CustomTable