import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
  apiKey: 'AIzaSyC6KyCFogzYntzvkFqzM5abOS0GvjzJwb4',
  authDomain: 'react-chat-25a57.firebaseapp.com',
  projectId: 'react-chat-25a57',
  storageBucket: 'react-chat-25a57.appspot.com',
  messagingSenderId: '192676927691',
  appId: '1:192676927691:web:11b474d9e351e57523e34e',
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
