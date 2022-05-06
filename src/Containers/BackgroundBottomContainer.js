import React from 'react'

//Containers

import PaymentBackdropContainer from './PaymentBackdropContainer';
import MerchantsContainer from './MerchantsContainer';

//Material UI
import { Box } from '@mui/material';


const BackgroundBottomContainer = () => {
    return (
        <Box style={{ backgroundColor: "#E5E5E5", display: "flex", height: "80vh", flexDirection: "column", alignItems: "center", justifyContent: "flex-start", overflowY: "scroll" }}>


                <div style={{ minHeight: "340px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", backgroundColor: "#E5E5E5" }}>

                </div>

                <MerchantsContainer />

                
         

            <PaymentBackdropContainer />







        </Box>
    )
}

export default BackgroundBottomContainer