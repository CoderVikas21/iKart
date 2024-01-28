import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import {store} from './redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
    <BrowserRouter>
       <App />
<<<<<<< HEAD
       <ToastContainer
       position="top-center"
       />
=======
       <ToastContainer 
  position="top-center"/>
>>>>>>> be1de6d1e1446ada0c65b5a72cf71e37a3254ccd
    </BrowserRouter>
    </Provider>
  </>
);

