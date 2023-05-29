import { createContext } from "react";
import { IZakazchik } from "../../Interfaces/Zakazchik/Zakazchik";
import ZakazchikiDAL from "../../DAL/Zakazchik/Zakazchiki";


const ZakazchiContext = createContext<IZakazchik[]>(ZakazchikiDAL);

export default ZakazchiContext;
