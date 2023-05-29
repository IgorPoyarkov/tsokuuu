import React, { FC, useState } from 'react';
import { IAdress } from '../../Interfaces/ObchieSwedeniya/Adress';
import MyLablelInput from '../UI/MyLablelIutnp/MyLablelInput';

interface IAdresProps {
    adress: IAdress;
    children: string;
    // newAdress: (adres: IAdress) => void;
}


const Adress: FC<IAdresProps> = (
    { adress, children }
) => {

    const [adres, setAdres] = useState(adress)



    return (

        <div key={adress.id} className='adress'>
            <p>{children}</p>
            <MyLablelInput children={'Индекс: '} type='text' value={adres.indeks} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAdres({
                ...adres,
                indeks: Number(e.target.value)
            }
            )} />
            <MyLablelInput children={'Страна: '} type='text' value={adres.strana} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAdres({
                ...adres,
                indeks: Number(e.target.value)
            }
            )} />
            <MyLablelInput children={'Область (край): '} type='text' value={adres.oblast} />
            <MyLablelInput children={'Населённый пункт: '} type='text' value={adres.naselPunkt} />
            <MyLablelInput children={'Улица: '} type='text' value={adres.ulica} />
            <MyLablelInput children={'Дом: '} type='text' value={adres.dom} />
            <MyLablelInput children={'Прочая информация: '} type='text' value={adres.dom} />
        </div>

    );
};

export default Adress;