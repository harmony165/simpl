import React from 'react'
import { useState } from 'react';
//Material UI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';


const BottomNav = () => {
    const SimplTab = styled(Tab)({
        textTransform: "none",
        fontSize: "0.7rem",
        width: "25%",
    });

    const [value, setValue] = useState(1);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <Box  sx={{
            
            boxShadow: " 0px 4px 10px rgba(0, 0, 0, 0.07)",
            color: "primary",
            position: "fixed",
            bottom: 0,
            width: "100%",
            backgroundColor:"white",
            height:"10vh"


        }} >
            <Tabs sx={{
                '.MuiTabs-flexContainer': {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    width: "100%",
                    height:"100%"

                },

                '.MuiTabs-indicator': {
                    transform: 'translateY(-71.5px)',


                }
            }} centered value={value} onChange={handleChange} aria-label="icon tabs example" textColor="primary">
                <SimplTab icon={<HomeIcon sx={{fontSize:'4vh'}} />} label="Home" aria-label="Home" />
                <SimplTab icon={<LibraryBooksIcon sx={{fontSize:'4vh'}} />} label="Passbook" aria-label="passbook" />
                <SimplTab icon={<CardMembershipIcon sx={{fontSize:'4vh'}} />} label="Billbox" aria-label="billbox" />
                <SimplTab icon={<MoreVertOutlinedIcon sx={{fontSize:'4vh'}} />} label="More" aria-label="more" />
            </Tabs>
        </Box>
    )
}

export default BottomNav