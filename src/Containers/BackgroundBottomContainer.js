import React from 'react'

//Containers

import PaymentBackdropContainer from './PaymentBackdropContainer';
import MerchantsContainer from './MerchantsContainer';

//Material UI
import { Box } from '@mui/material';


const BackgroundBottomContainer = () => {
    return (
            <Box style={{ backgroundColor: "#E5E5E5", display: "flex", height: "61vh", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", overflowY: "scroll" }}>
       

              <div style={{width:"100%", display:"flex",flexDirection:"column",alignItems:"center",justifyContent: "center",backgroundColor: "#E5E5E5", height: "100%" }}>
                <div style={{minHeight:"300px"}}>

                </div>
                <MerchantsContainer />
            </div>

                <PaymentBackdropContainer />







            </Box>
    )
}

export default BackgroundBottomContainer