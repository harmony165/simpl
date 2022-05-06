import React from 'react'


//Material UI
import DoneIcon from '@mui/icons-material/Done';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import { Box, Typography } from '@mui/material';


const Transaction = ({success, amount , date }) => {
    return (
        <Box pt="16px" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box style={{ display: "flex", alignItems: "center" }}>
                {
                    success ?  <DoneIcon sx={{ fontSize: "14px", color: "primary", mr: "5px" }} /> : <ErrorOutlineOutlinedIcon sx={{ fontSize: "14px", color: "#E33F37", mr: "5px" }} /> 
                }
               
                <Typography sx={{ fontSize: "14px", }} color={success ? "#202020": "#E33F37"}> {success ? `Paid on ${date}` : "Autopay failed"}</Typography>
            </Box>
            <Typography sx={{ fontSize: "14px", }} color={success ? "#202020": "#E33F37"}>{amount}</Typography>
        </Box>
    )
}

export default Transaction