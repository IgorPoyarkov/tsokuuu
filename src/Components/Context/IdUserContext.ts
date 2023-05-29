import { createContext } from "react";
import ZakazchikiDAL from "../../DAL/Zakazchik/Zakazchiki";

let idINN: number;

let IdUserContext = createContext((idINN = 145));

export default IdUserContext;
