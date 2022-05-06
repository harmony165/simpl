import React from 'react'

//Material UI
import { Box, Typography } from '@mui/material';

const MerchantBadge = ({ image, bg ,name}) => {
  return (
    <Box p="10px 10px 0px 10px" mr="5px" style={{ width: "70px", backgroundColor:  bg , borderRadius: "14px" }}>
      <img alt="icon" src={image} style={{ width:"4vh",minWidth:"25px",  borderRadius: "50%", marginBottom:"5px" }} />
      <Typography pb="1.5vh" sx={{ fontSize: "1.3vh" }} color="#202020" >
       {name}
      </Typography>
    </Box>
  )
}

export default MerchantBadge