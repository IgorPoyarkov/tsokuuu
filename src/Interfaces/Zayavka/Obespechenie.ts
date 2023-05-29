import { VidObektaZakupki } from "../../Enums/VidObektaZakupki";
import { IRekvizity } from "../ObchieSwedeniya/Rekvizity";

export interface IObespechenie {
  id: number;
  idZayavka: number;
  rekviziti: IRekvizity;
  trebovanieObespecheniya: boolean;
  razmerObespech?: number;
  porydokObaspecheniya?: string;
}

export interface IObespechenieOGOK extends IObespechenie {
  vidObektaZakupki: VidObektaZakupki;
  srokiGarantii: string;
  garantObslugTovata?: string;
  trebovanieGarantiiProizv?: string;
}
