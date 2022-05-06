import React from 'react'

//Material UI
import { Box, Typography } from '@mui/material';

const MerchantBadge = ({ image, bg ,name}) => {
  return (
    <Box p="10px 10px 0px 10px" mr="5px" style={{ width: "60px", backgroundColor:  bg , borderRadius: "14px" }}>
      <img alt="icon" src={image} style={{ margin:"0px 5px", width:"42px",   borderRadius: "50%", marginBottom:"5px" }} />
      <Typography pb="15px" sx={{ fontSize: "10px" }} color="#202020" >
       {name}
      </Typography>
    </Box>
  )
}

export default MerchantBadge