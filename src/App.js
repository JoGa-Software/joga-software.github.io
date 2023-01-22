import React from 'react';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import JSAppBar from './components/JSAppBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#91ff35',
    },
  },
});

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <JSAppBar />
          <RouterProvider router={router} />
        </ThemeProvider>
      </div>
    )
  }
}

export default App;
