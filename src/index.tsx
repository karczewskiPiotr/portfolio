import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import App from './App';
import { FirebaseAppProvider } from 'reactfire';

const firebaseConfig = {
  apiKey: 'AIzaSyDOrT4PwYyQMZUbzft9-P7M8xac03lWaSg',
  authDomain: 'portfolio-7c0fd.firebaseapp.com',
  databaseURL: 'https://portfolio-7c0fd.firebaseio.com',
  projectId: 'portfolio-7c0fd',
  storageBucket: 'portfolio-7c0fd.appspot.com',
  messagingSenderId: '516517349129',
  appId: '1:516517349129:web:ccd36454679c733134b5d8',
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<div>Loding</div>}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
