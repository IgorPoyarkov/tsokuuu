import { TipRekvizitov } from "../../Enums/TipRekvizitov";

export interface IRekvizity {
    id: number;
    nomRS: string;
    nomLS: string;
    BIK: number;
    naimenKredOrg: string;
    nomKS: string;
    naznacheniePlatega: string;
    tipRekvizitov: TipRekvizitov;

}