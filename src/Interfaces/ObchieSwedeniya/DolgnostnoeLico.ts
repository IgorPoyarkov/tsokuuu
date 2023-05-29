import { IAdress } from "./Adress";



export interface IDolgnostnoeLico{
    id: number;
    familiya: string;
    imya: string;
    otchestvo?: string;
    dataRogdeniya?: string;
    dolgnost: string;
    idOrganizacii: number;
    mestogitelstva?: IAdress;
    osnovaniyPodpisi?: string;


}