import React, { FC } from 'react';
import { IRekvizity } from '../../Interfaces/ObchieSwedeniya/Rekvizity';
import MyLablelInput from '../UI/MyLablelIutnp/MyLablelInput';


interface IRekvizitProps {
    rekvizit: IRekvizity;
}

function VidRekvizitov(tipRekviz: number): string {
    let tip = '';

    switch (tipRekviz) {
        case 2:
            tip = 'Реквизиты счета в соответствии с пунктом 16 части 1 статьи 42 Федерального закона № 44-ФЗ'
            break;
        case 1:
            tip = 'Реквизиты обеспечения исполнения контракта'
            break;
        case 0:
            tip = 'Реквизиты обеспечения гарантийных обязательств'
            break;
    }
    return tip;

}



const Rekxizit: FC<IRekvizitProps> = (
    { rekvizit }
) => {
    return (

        <div key={rekvizit.tipRekvizitov} className='rekvizity'>
            <h3>{VidRekvizitov(rekvizit.tipRekvizitov)}</h3>
            <MyLablelInput children={'Номер расчётного счёта: '} value={rekvizit.nomRS}/>
            <MyLablelInput children={'Номер лицевого счёта: '} value={rekvizit.nomLS} />
            <MyLablelInput children={'БИК: '} value={rekvizit.BIK}/>
            <MyLablelInput children={'Наименование кредитной организации: '} value={rekvizit.naimenKredOrg}/>
            <MyLablelInput children={'Номер корреспондентского счета: '} value={rekvizit.nomKS}/>
            <MyLablelInput children={'Назначения платежа и прочие сведения: '} value={rekvizit.naznacheniePlatega}/>
        </div>
    );
};

export default Rekxizit;