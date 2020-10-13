import React, { ComponentType, lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './i18n';
import { FirebaseAppProvider } from 'reactfire';
import Loading from './components/loading';

const API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'portfolio-7c0fd.firebaseapp.com',
  databaseURL: 'https://portfolio-7c0fd.firebaseio.com',
  projectId: 'portfolio-7c0fd',
  storageBucket: 'portfolio-7c0fd.appspot.com',
  messagingSenderId: '516517349129',
  appId: '1:516517349129:web:ccd36454679c733134b5d8',
};

const LazyApp = lazy(() => {
  return Promise.all([
    import('./App'),
    new Promise<{ default: ComponentType<any> }>((resolve) =>
      setTimeout(resolve, 1500)
    ),
  ]).then(([moduleExports]) => moduleExports);
});

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<Loading />}>
        <LazyApp />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
