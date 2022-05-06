
import './App.css';

//Material UI
import theme from './assets/theme';
import { ThemeProvider } from '@emotion/react';
import { Box } from '@mui/material';

//Containers
import BackgroundTopContainer from './Containers/BackgroundTopContainer';
import BackgroundBottomContainer from './Containers/BackgroundBottomContainer';

//Components
import BottomNav from './Components/BottomNav';






function App() {


  return (

    <ThemeProvider theme={theme}>

      <div className="App">
      <BackgroundTopContainer />
  
        <BackgroundBottomContainer />
   
       
        <BottomNav />

      </div>

    </ThemeProvider >

  );
}


export default App;
