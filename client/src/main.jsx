import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store/store';
import axios from 'axios';
import { theme } from './theme';



 axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <BrowserRouter>
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
      </BrowserRouter>
    </ReduxProvider>
  </React.StrictMode>
)
