import React from "react";
import Homepage from "./pages/Homepage";
import { ToastProvider } from "react-toast-notifications";

//

function App() {
  return (
    <ToastProvider autoDismissTimeout={5000} autoDismiss={true}>
      <Homepage />
    </ToastProvider>
  );
}

export default App;
