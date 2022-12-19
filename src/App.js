import React from 'react';
import Homepage from './pages/Homepage';
import { ToastProvider } from 'react-toast-notifications';
import Newsletter from './pages/Newsletter';

//

function App() {
  return (
    <ToastProvider autoDismissTimeout={5000} autoDismiss={true}>
      <Homepage />
      <Newsletter />
    </ToastProvider>
  );
}

export default App;
