import React from 'react'

//Components

import MerchantBadge from '../Components/MerchantBadge';

//Material UI
import { Box, Typography } from '@mui/material';

//Asset Imports
import bb from "../assets/images/bb.png";
import dunzo from "../assets/images/dunzo.png";
import grofers from "../assets/images/grofers.png";
import zomato from "../assets/images/zomato.png";

const MerchantsContainer = () => {
    return (
        <Box pb="20px" sx={{
            display:"flex",flexDirection:"column",
            backgroundColor: "white", filter: "dropShadow(0px 1px 28px rgba(0, 4, 18, 0.04))"
            , width: "90%", maxWidth: "800px", borderRadius: "12px"
        }}>

            <Typography py="14px" px="25px" sx={{ textAlign: "left", fontSize: "12px" }} color="#A8AFB8" gutterBottom>
                Use Simpl on 4500+ merchants
            </Typography>

            <Box sx={{
                overflowX: "auto",
                whiteSpace: "nowrap"
            }}>
                <Box ml="25px" sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "350px",
                }}>
                    <MerchantBadge image={zomato} name="Zomato" bg="#FFF6F6" />
                    <MerchantBadge image={dunzo} name="Dunzo" bg="#F8FFFA" />
                    <MerchantBadge image={bb} name="Big Basket" bg="#FAFFEE" />
                    <MerchantBadge image={grofers} name="Grofers" bg="#FFF4F0" />
                    <MerchantBadge image={bb} name="Big Basket" bg="#FAFFEE" />
                    <MerchantBadge image={zomato} name="Zomato" bg="#FFF6F6" />
                    <MerchantBadge image={dunzo} name="Dunzo" bg="#F8FFFA" />
                    <MerchantBadge image={bb} name="Big Basket" bg="#FAFFEE" />
                </Box>
            </Box>
        </Box>
    )
}

export default MerchantsContainer