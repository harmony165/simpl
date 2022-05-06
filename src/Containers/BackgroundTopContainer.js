import React from 'react'
import { Avatar, Box, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BackgroundTopContainer = () => {
  return (
    <Box style={{ backgroundColor: "#00D1C1", height: "30vh", display: "flex", alignItems: "flex-start ", justifyContent: "center" }}>
      <Box pt="4vh" pb="25px" px="25px" style={{ display: "flex", alignItems: "center", justifyContent: "space-between",width:"100%", maxWidth: "800px" }}>
        <Box style={{ display: "flex" }}>

          <Avatar size="small" sx={{ width: "35px", height: "35px", bgcolor: "inherit", border: "2px solid white", fontSize: "1rem", fontWeight: "500" }}>SK</Avatar>
          <Box pl="10px" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
            <Typography color="secondary" sx={{ opacity: "56%", fontSize: "0.8rem" }}>Hello</Typography>
            <Typography color="secondary" sx={{ fontSize: "1.1rem" }}>Selva <ArrowForwardIosIcon sx={{ fontSize: "12px" }} /></Typography>
          </Box>
        </Box>

        <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
          <Typography color="secondary" sx={{ opacity: "56%", fontSize: "0.8rem" }}>Upgrade credit limit </Typography>
          <Typography color="secondary" sx={{ fontSize: "1.1rem", textShadow: "0px 2.1px 2.1px rgba(36, 61, 124, 0.25)" }}>₹15,000 <ArrowForwardIosIcon sx={{ fontSize: "12px" }} /></Typography>
        </Box>

      </Box>
    </Box>

  )
}

export default BackgroundTopContainer