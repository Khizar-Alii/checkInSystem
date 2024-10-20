import CheckIns from '../components/checkIns/checkIns';
import Header from '../components/header/header';
import HeroSection from '../components/heroSection/heroSection';
import { Box } from '@mui/material'; 
import './App.css';

function App() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: 'white',
          flex: 1,
          padding: '0 30px',
          minHeight: '100vh', 
        }}
      >
        <Header />
        <HeroSection />
        <CheckIns />
      </Box>
    </>
  );
}

export default App;
