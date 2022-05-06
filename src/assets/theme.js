import { createTheme } from '@mui/material/styles';


const primaryColor = "#00D1C1";
const secondaryColor = "#FFFFFF"
const dangerColor = "#E33F37"

const theme = createTheme({
    palette: {
      
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
      error:{
          main: dangerColor,
      }
    },
  }
    
  );

export default theme;