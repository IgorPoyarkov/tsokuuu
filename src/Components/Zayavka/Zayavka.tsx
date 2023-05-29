import React, { FC, useContext, useState } from 'react';
import { IFinansirovanie, IZayavka } from '../../Interfaces/Zayavka/Zayavka';
import MyLablelInput from '../UI/MyLablelIutnp/MyLablelInput';
import ZayavkiContext from '../Context/ZayavkaContext';
import Adress from '../ObchieComponenty/Adress';
import { IAdress } from '../../Interfaces/ObchieSwedeniya/Adress';
import IdUserContext from '../Context/IdUserContext';
import { TipZayavki } from '../../Enums/TipZayavki';

const Zayavka: FC = () => {

    const zayavkaContext = useContext<IZayavka[]>(ZayavkiContext);
    const iduserContext = useContext<number>(IdUserContext);
    const [obcheeFin, setObcheeFin] = useState(0)

    const [finansy, setFinansy] = useState<IFinansirovanie>({
        summaTekuchGod: 0,
        summaPervGod: 0,
        summaVtorGod: 0,
        summaPosledGod: 0,
    })

    const [adress, setAdress] = useState<IAdress>({
        id: 0,
        indeks: 0,
        strana: '',
        oblast: '',
        naselPunkt: '',
        ulica: '',
        dom: '',
        prochee: '',
    })
    const [zayavka, setZayavka] = useState<IZayavka>({
        id: 0,
        idINN: iduserContext,
        tipzakupki: 0,
        nomerPPGZ: '',
        predmetKontrakta: '',
        NMCK: 0,
        finansirovanie: finansy,
        idMesto: 1,
        idSrokIspolneniya: 1,
        tekuchGod: 2022,
    })

    const TipZayavki: string[] = [
        "Строительство",
        "Реконструкция",
        "Капитальный ремонт",
        "Ремонт",
        "Содержание",
        "Проектно-изыскательские работы",
        "Авторский надзор",
        "Строительный контроль по строительству (реконструкции)",
        "Строительный контроль на капитальный ремонт",
        "Строительный контроль на ремонт",
        "Прочее",
    ]

    function gni() {
        const newZayavka: IZayavka = {
            id: 0,
            idINN: iduserContext,
            tipzakupki: zayavka.tipzakupki,
            nomerPPGZ: zayavka.nomerPPGZ,
            predmetKontrakta: zayavka.predmetKontrakta,
            NMCK: zayavka.NMCK,
            finansirovanie: finansy,
            idMesto: 12,
            idSrokIspolneniya: 12,
            tekuchGod: Number(new Date().getFullYear),
        }
        return (
            setZayavka(newZayavka),
            console.log(zayavka, adress)
        )
    }

    function newAdress(adres: IAdress) {
        setAdress(adres)
    }


    return (
        <div className='obchayaInfoZakazchika'>
            <label>
                Выберите тип закупки:
                <select onChange={(Event: React.ChangeEvent<HTMLSelectElement>) => setZayavka({ ...zayavka, tipzakupki: Number(Event.target.value) })}>
                    {TipZayavki.map((tip, index) =>
                        <option value={index}>
                            {tip}
                        </option>
                    )}
                </select>
            </label>

            <MyLablelInput children={'НМЦК: '} type='text' value={zayavka.NMCK} onChange={(Event: React.ChangeEvent<HTMLInputElement>) => setZayavka({ ...zayavka, NMCK: Number(Event.target.value) })} />
            <MyLablelInput children={'Предмет контракта: '} type='text' value={zayavka.predmetKontrakta} onChange={(Event: React.ChangeEvent<HTMLInputElement>) => setZayavka({ ...zayavka, predmetKontrakta: Event.target.value })} />
            <MyLablelInput children={'Номер позиции плана-графика закупок: '} type='text' value={zayavka.nomerPPGZ} onChange={(Event: React.ChangeEvent<HTMLInputElement>) => setZayavka({ ...zayavka, nomerPPGZ: Event.target.value })} />
            <p>{'Финансирование закупки'} </p>
            <table >
                <tr>
                    <th>Итого</th>
                    <th>{'Сумма на '} {new Date().getFullYear()} {' год'}</th>
                    <th>{'Сумма на '} {new Date().getFullYear() + 1} {' год'}</th>
                    <th>{'Сумма на '} {new Date().getFullYear() + 2} {' год'}</th>
                    <th>{'Сумма на последующие годы'}</th>
                </tr>
                <tr>
                    <td> <input
                        type='number'
                        title='итого'
                        value={obcheeFin}
                    />
                    </td>
                    <td>
                        <input
                            type='number'
                            title='на текущий год'
                            value={finansy.summaTekuchGod}
                            onChange={(Event: React.ChangeEvent<HTMLInputElement>) => (setFinansy({ ...finansy, summaTekuchGod: Number(Event.target.value) }), setObcheeFin(obcheeFin + Number(Event.target.value)))}
                        />
                    </td>
                    <td>
                        <input
                            type='number'
                            title='на первый год'
                            value={finansy.summaPervGod}
                            onChange={(Event: React.ChangeEvent<HTMLInputElement>) => (setFinansy({ ...finansy, summaPervGod: Number(Event.target.value) }), setObcheeFin(obcheeFin + Number(Event.target.value)))}
                        />
                    </td>
                    <td> <input
                        type='number'
                        title='на второй год'
                        value={finansy.summaVtorGod}
                        onChange={(Event: React.ChangeEvent<HTMLInputElement>) => (setFinansy({ ...finansy, summaVtorGod: Number(Event.target.value) }), setObcheeFin(obcheeFin + Number(Event.target.value)))}
                    />
                    </td>
                    <td> <input
                        type='number'
                        title='на последующие годы'
                        value={finansy.summaPosledGod}
                        onChange={(Event: React.ChangeEvent<HTMLInputElement>) => (setFinansy({ ...finansy, summaPosledGod: Number(Event.target.value) }), setObcheeFin(obcheeFin + Number(Event.target.value)))}
                    />
                    </td>
                </tr>
            </table>
            <Adress adress={adress} children='Место поставки товара (выполнения работ, оказания услуг)'  />

            <button onClick={gni}> Gmi!</button>
        </div>
    );
};

export default Zayavka;