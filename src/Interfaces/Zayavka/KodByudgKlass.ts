import { IFinansirovanie } from "./Zayavka";

export interface IKodByudgKlass {
    id: number;
    idZayavka: number;
    KBK: string;
    summa: IFinansirovanie;
  }