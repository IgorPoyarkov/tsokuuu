import { createContext } from "react";
import { IZayavka } from "../../Interfaces/Zayavka/Zayavka";
import ZayavkiDAL from "../../DAL/Zayavka/ZayavkiDAL";


const ZayavkiContext = createContext<IZayavka[]>(ZayavkiDAL);

export default ZayavkiContext;
