import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import Product from './pages/product';
import { Box } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#F4F7FB",overflow:"hidden" }} height="100vh">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Product />} />
          </Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
