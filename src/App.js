import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import { DBMToWattsConversionCalculator } from './components/DBMToWattsConversionCalculator/DBMToWattsConversionCalculator';
import { DecimalFractionTable } from './components/DecimalFractionTable/DecimalFractionTable';
import { GlobalProvider } from "./context/GlobalState";


import  "./styles/mainstyles.scss";

const App = () => {
  return (
    <div>
      <GlobalProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/DecimalFractionTable/:id" element={<DecimalFractionTable/>} />
            <Route path="/DBMToWattsConversionCalculator/:id" element={<DBMToWattsConversionCalculator />} />
          </Switch>
        </BrowserRouter>
      </GlobalProvider>
    </div>
  )
}

export default App
