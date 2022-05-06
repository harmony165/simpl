import React from 'react'
import { useState } from 'react';
//Components
import Transaction from '../Components/Transaction';
import { fireConfetti } from '../Components/confetti';

//Material UI
import { Box, Typography } from '@mui/material';

import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import LoadingButton from '@mui/lab/LoadingButton';

//Asset Imports
import paytm from '../assets/images/paytm.png';


const PaymentBackdropContainer = () => {

    const [loading, setLoading] = useState(false);



    const handleClick = () => {
        setLoading(true);
        setTimeout(() => {
            fireConfetti()
            setLoading(false);


        }, 2000)
    }

    return (

        <Box sx={{ backgroundColor: "white", filter: "dropShadow(0px 1px 28px rgba(0, 4, 18, 0.04))", width: "90%", maxWidth: "800px", borderRadius: "12px", position:"absolute", top:"100px", zIndex:"2" }}>
            <Box px="25px" py="2.5vh"  >
                <Box pb="2vh" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: " 1px dashed #CCCCCC" }}>
                    <Typography sx={{ fontSize: "2vh" }} color="#888888" gutterBottom>
                        Amount due
                    </Typography>
                    <Box style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
                        <Typography sx={{ fontSize: "4vh" }} color="#202020">₹26,000</Typography>
                        <Typography sx={{ fontSize: "1.5vh" }} color="#202020">Due by April 20 </Typography>
                    </Box>
                </Box>
                <Box py="1.5vh" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: " 1px solid #CCCCCC" }}>
                    <Box style={{ display: "flex", alignItems: "center" }}>
                        <ReceiptLongIcon sx={{ fontSize: "14px", color: "#888888", mr: "3px" }} />
                        <Typography sx={{ fontSize: "1.7vh" }} color="#888888"> Bill amount</Typography>
                    </Box>
                    <Typography sx={{ fontSize: "1.7vh", }} color="#888888"> ₹41,000</Typography>
                </Box>
                <Box >
                    <Transaction success date="April 18" amount="₹5,000" />
                    <Transaction success date="April 19" amount="2 x ₹5,000" />
                    <Transaction amount="5 x ₹5,000" />
                    <Transaction amount="₹1,000" />
                </Box>

                <Box className="paynow" style={{display:"flex", alignItems:"center", justifyContent:"center",flexDirection:"column"}}>
                <Box pt="20px" pb="20px" style={{ width:"100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <Box className="" style={{ display: "flex", alignItems: "center" , flexDirection:"row"}}>
                        <img alt="icon" src={paytm} style={{ marginRight: "5px" }} />
                        <Typography sx={{ fontSize: "2.5vh" }} color={"#202020"}>PayTM </Typography>
                    </Box>
                    <Typography sx={{ fontSize: "1.5vh", fontWeight: "600" }} color="#202020" >Change</Typography>
                </Box>

                <LoadingButton loading={loading} onClick={handleClick} variant="contained" color="primary" sx={{ color: "white", width: "100%", height: "6vh" }}> PAY NOW</LoadingButton>
                </Box>
          
                
            

            </Box>

        </Box>
    )
}

export default PaymentBackdropContainer