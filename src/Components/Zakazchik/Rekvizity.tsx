import React, { FC } from 'react';
import Rekxizit from './Rekxizit';
import { IZakazchik } from '../../Interfaces/Zakazchik/Zakazchik';

interface IRekvizityProps {
    rekvizit: IZakazchik;
}


const Rekvizity: FC<IRekvizityProps> = (
    { rekvizit }
) => {
    return (
        <div className='rekvizity'>
            <p>Реквизиты</p>
            <Rekxizit rekvizit={rekvizit.rekvizity.rekvizityOGOK} />
            <Rekxizit rekvizit={rekvizit.rekvizity.rekvizityOIK} />
            <Rekxizit rekvizit={rekvizit.rekvizity.rekvizityOZ} />
        </div>
    );
};

export default Rekvizity;