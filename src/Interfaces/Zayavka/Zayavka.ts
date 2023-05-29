import { TipZayavki } from "../../Enums/TipZayavki";
import { IAdress } from "../ObchieSwedeniya/Adress";
import { IObespechenie, IObespechenieOGOK } from "./Obespechenie";
import { ISrokIspolneniya } from "./SrokIspolneniya";

export interface IFinansirovanie {
  summaTekuchGod: number;
  summaPervGod: number;
  summaVtorGod: number;
  summaPosledGod: number;
}

export interface IZayavka {
  id: number;
  idINN: number;
  tipzakupki: TipZayavki;
  nomerPPGZ: string;
  predmetKontrakta: string;
  NMCK: number;
  finansirovanie: IFinansirovanie;
  idMesto: number;
  idSrokIspolneniya: number;
  tekuchGod: number;
}
