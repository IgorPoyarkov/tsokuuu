import { TipIspolneniya } from "../../Enums/TipSrokaIspolneniya";
import { VidDney } from "../../Enums/VidDney";

export interface ISrokIspolneniya {
  id: number;
  tipSrokov: TipIspolneniya;
  srokDatyZaklyucg: boolean;
  srok: {
    nachalo: {
      vidDney: VidDney;
      dni: string;
    };
    okonchanie: {
      vidDney: VidDney;
      dni: string;
    };
  };
}
