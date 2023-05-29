import React, { FC } from 'react';
import { IDolgnostnoeLico } from '../../Interfaces/ObchieSwedeniya/DolgnostnoeLico';
import MyLablelInput from '../UI/MyLablelIutnp/MyLablelInput';


interface ISvedeniyaDolgLicProps {
    dolgLico: IDolgnostnoeLico;
}


const SvedeniyaDolgLic: FC<ISvedeniyaDolgLicProps> = (
    { dolgLico }
) => {
    return (
        <div className='svedeniyaDolgLic' key={dolgLico.id}>
            <p>Сведения о руководителе заказчика</p>
            <MyLablelInput children={'Должность руководителя заказчика: '} value={dolgLico.dolgnost}/>
            <MyLablelInput children={'Фамилия руководителя заказчика: '} value={dolgLico.familiya}/>
            <MyLablelInput children={'Имя руководителя заказчика: '} value={dolgLico.imya}/>
            <MyLablelInput children={'Отчество (при наличии) руководителя заказчика: '} value={dolgLico.otchestvo} />
            <MyLablelInput children={'Основание подписания контракта: '} value={dolgLico.osnovaniyPodpisi}/>
        </div>
    );
};

export default SvedeniyaDolgLic;