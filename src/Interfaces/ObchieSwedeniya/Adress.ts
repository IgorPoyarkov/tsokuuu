export interface IAdress {
  readonly id: number;
  indeks: number;
  strana: string;
  oblast: string;
  naselPunkt: string;
  ulica: string;
  dom?: string;
  prochee?: string;
}
