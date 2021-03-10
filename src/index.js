import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// import './next.config'

ReactDOM.render(
  <React.StrictMode>
    {/* <Suspense fallback={ <div>Loading.... </div>}> */}
    <App />
    {/* </Suspense> */}
  </React.StrictMode>,
  document.getElementById('root')
);