import { IAdress } from "../ObchieSwedeniya/Adress";
import { IDolgnostnoeLico } from "../ObchieSwedeniya/DolgnostnoeLico";
import { IRekvizity } from "../ObchieSwedeniya/Rekvizity";

export interface IZakazchik {
  id: number;
  INN: number;
  KPP: number;
  KTMO: number;
  OKTMO: number;
  nazvanie: string;
  sokrNazvanie?: string;
  adress: IAdress;
  email: string;
  telefon: string;
  fax?: string;
  rukovoditel: IDolgnostnoeLico;
  rekvizity: {
    rekvizityOGOK: IRekvizity;
    rekvizityOIK: IRekvizity;
    rekvizityOZ: IRekvizity;
  };
}
