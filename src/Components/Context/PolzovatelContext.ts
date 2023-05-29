import React, {createContext} from "react";
import PolzovateliDAL from "../../DAL/Polzovatel/PolzovateliDAL";
import { IPolzovatel } from "../../Interfaces/ObchieSwedeniya/Polzovatel";



const PolzovatelContext = createContext<IPolzovatel[]>(PolzovateliDAL);

export default PolzovatelContext;
