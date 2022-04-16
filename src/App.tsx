import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import AppleIcon from '@mui/icons-material/Apple';

function App() {
  return (
    <Button variant="contained" startIcon={<AppleIcon />}>Hello World</Button>
  );
}

export default App;
