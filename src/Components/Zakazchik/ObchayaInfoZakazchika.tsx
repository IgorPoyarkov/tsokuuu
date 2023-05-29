import React, { FC } from 'react';
import { IZakazchik } from '../../Interfaces/Zakazchik/Zakazchik';
import MyLablelInput from '../UI/MyLablelIutnp/MyLablelInput';


interface ZakazchikProps {
    zakazchik: IZakazchik;
}

const ObchayaInfoZakazchika: FC<ZakazchikProps> = (
    { zakazchik }
) => {
    return (
        <div key={zakazchik.id} className='obchayaInfoZakazchika'>
            <p>Общие сведения об организации</p>
            <MyLablelInput children={'ИНН: '} type='text' value={zakazchik.INN} />
            <MyLablelInput children={'КПП: '} type='text' value={zakazchik.KPP} />
            <MyLablelInput children={'Полное название: '} type='text' value={zakazchik.nazvanie} />
            <MyLablelInput children={'Сокращённое название: '} type='text' value={zakazchik.sokrNazvanie} />
            <MyLablelInput children={'ОКТМО: '} type='text' value={zakazchik.OKTMO} />
            <MyLablelInput children={'КТМО: '} type='text' value={zakazchik.KTMO} />
            <MyLablelInput children={'Email: '} type='text' value={zakazchik.email} />
            <MyLablelInput children={'Телефон: '} type='tel' value={zakazchik.telefon} />
            <MyLablelInput children={'Факс: '} type='tel' value={zakazchik.fax} />
        </div>
    );
};

export default ObchayaInfoZakazchika;