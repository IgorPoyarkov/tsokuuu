import React, { useContext, useState } from 'react';
import Zakazchik from './Components/Zakazchik/Zakazchik';
import { IZakazchik } from './Interfaces/Zakazchik/Zakazchik';
import Header from './Components/ObchieComponenty/Header';
import Zayavka from './Components/Zayavka/Zayavka';
import Footer from './Components/ObchieComponenty/Footer';
import ZakazchiContext from './Components/Context/ZakazchikContext';
import { IZayavka } from './Interfaces/Zayavka/Zayavka';
import ZayavkiContext from './Components/Context/ZayavkaContext';
import PolzovatelContext from './Components/Context/PolzovatelContext';
import { IPolzovatel } from './Interfaces/ObchieSwedeniya/Polzovatel';
import { BrowserRouter, Route } from 'react-router-dom';
import ZakazchikiDAL from './DAL/Zakazchik/Zakazchiki';



function App() {

  const zayavkaContext = useContext<IZayavka[]>(ZayavkiContext)
  const polzovatelContext = useContext<IPolzovatel[]>(PolzovatelContext);
  const [zakazchiks, setZakazchiks] = useState<IZakazchik[]>(ZakazchikiDAL);


  return (
    <div className="App">
      <ZakazchiContext.Provider value={zakazchiks}>
        <PolzovatelContext.Provider value={polzovatelContext} >
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </PolzovatelContext.Provider>
        <Zakazchik />
        <ZayavkiContext.Provider value={zayavkaContext}>
          <Zayavka />
        </ZayavkiContext.Provider>
      </ZakazchiContext.Provider>
      <Footer />
    </div >
  );
}

export default App;

