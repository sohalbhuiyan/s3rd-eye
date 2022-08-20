import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './context/Context';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <ContextProvider>
//     <App />
//     </ContextProvider>
//   </React.StrictMode>
// );

ReactDOM.render(
  <React.StrictMode>
<ContextProvider>
    <App />
</ContextProvider>
 </React.StrictMode>,
 document.getElementById('root')
 );
