
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from "react-redux";
import { store } from './app/store.js';
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from './context/ThemeContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <GoogleOAuthProvider
     clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID} >
    <ThemeProvider>
      <Toaster position="top-right" />
    <App />
    </ThemeProvider>
    </GoogleOAuthProvider>
  </Provider>
)
