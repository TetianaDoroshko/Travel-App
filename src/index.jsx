import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { Toaster } from 'react-hot-toast';
import style from './styles/App.module.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
    <Provider store={store}>
        <BrowserRouter>
            <App />
            <Toaster
                toastOptions={{
                    className: `${style.notification}`,
                    style: {
                        background: '#242a3a',
                        color: '#ffffff'
                    }
                }}
            />
        </BrowserRouter>
    </Provider>
    // </React.StrictMode>
);
