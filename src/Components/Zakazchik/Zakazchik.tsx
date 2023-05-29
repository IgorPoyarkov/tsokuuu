import React, { FC, useState, useContext } from 'react';
import { IZakazchik } from '../../Interfaces/Zakazchik/Zakazchik';
import ObchayaInfoZakazchika from './ObchayaInfoZakazchika';
import Adress from '../ObchieComponenty/Adress';
import SvedeniyaDolgLic from './SvedeniyaDolgLic';
import Rekvizity from './Rekvizity';
import MyLablelInput from '../UI/MyLablelIutnp/MyLablelInput';
import MyButton from '../UI/MyButton/MyButton';
import IdUserContext from '../Context/IdUserContext';
import ZakazchiContext from '../Context/ZakazchikContext';


const Zakazchik: FC = () => {

    const [sogl, setSoglasie] = useState<string>('none')
    const [sog, setSog] = useState<string>('false')
    const zakazchikContext = useContext<IZakazchik[]>(ZakazchiContext);
    const context = useContext<number>(IdUserContext);

    function soglasie() {

        if (sog === 'false') {
            setSoglasie('')
            setSog('true')
        }
        else {
            setSoglasie('none')
            setSog('false')
        }
    }

    return (
        <main key={context}>
            {zakazchikContext.filter(id => id.INN === context).map(zak =>
                <div key={zak.id} className='zakazchik'>
                    <ObchayaInfoZakazchika zakazchik={zak} />
                    <Adress adress={zak.adress} children='Адрес'/>
                    <SvedeniyaDolgLic dolgLico={zak.rukovoditel} />
                    <Rekvizity rekvizit={zak} />
                    <MyLablelInput children={'Подтверждаю правильность сведений'} type='checkbox' value={sog} onClick={soglasie} />
                    <MyButton style={{ display: sogl }} children={'Перейти к заполнению заявки'} />
                </div>
            )}
        </main>
    );
};

export default Zakazchik; 