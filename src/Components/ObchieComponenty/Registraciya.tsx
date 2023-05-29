import React, { useState, useContext, FC } from 'react';
import { IPolzovatel } from '../../Interfaces/ObchieSwedeniya/Polzovatel';
import { IZakazchik } from '../../Interfaces/Zakazchik/Zakazchik';
import MyLablelInput from '../UI/MyLablelIutnp/MyLablelInput';
import IdUserContext from '../Context/IdUserContext';
import ZakazchiContext from '../Context/ZakazchikContext';
import PolzovatelContext from '../Context/PolzovatelContext';


const Registraciya: FC = () => {

    const [reg, setReg] = useState({ INN: 0, login: '', parol: '', povtorParol: '' })
    const [soobch, setSoobch] = useState({ soobch: '', displ: '' })
    const context = useContext(IdUserContext);
    const zakazchikContext = useContext<IZakazchik[]>(ZakazchiContext);
    const polzovatelContext = useContext<IPolzovatel[]>(PolzovatelContext);


    function registrLoginChange(e: React.ChangeEvent<HTMLInputElement>) {
        setReg({
            ...reg,
            login: e.target.value,
        })
    }

    function registrLoginBlur(e: React.ChangeEvent<HTMLInputElement>) {
        for (let i = 0; i < polzovatelContext.length; i++) {
            let user = polzovatelContext[i];

            if (user.login === e.target.value) {
                return (
                    setSoobch(
                        {
                            ...soobch,
                            soobch: 'Такого пользователь зарегистрирован',

                        }
                    ),
                    setReg({
                        ...reg,
                        login: '',
                    }
                    )
                )
            }
        }
    }

    function registrParolChange(e: React.ChangeEvent<HTMLInputElement>) {
        setReg({
            ...reg,
            parol: e.target.value,
        })
    }

    function registrPovtorParolChange(e: React.ChangeEvent<HTMLInputElement>) {
        setReg({
            ...reg,
            povtorParol: e.target.value,
        })
    }

    function regisraciya(event: React.MouseEvent<HTMLButtonElement>, par: string, povtPar: string) {
        event.preventDefault()
        if (reg.parol === '') {
            return (setSoobch(
                {
                    ...soobch,
                    soobch: 'Вы не ввели пароль',
                }
            )),
                setReg({
                    ...reg,
                    parol: '',
                    povtorParol: '',
                })
        }
        else {
            if (par === povtPar && !(reg.login === '')) {
                console.log('Вы добавили пользователя: ' + reg.login + ' ИНН организации: ' + reg.INN)
                return (
                    setSoobch(
                        {
                            ...soobch,
                            displ: 'none',
                        }
                    )
                )
            }
            else {

                return (setSoobch(
                    {
                        ...soobch,
                        soobch: 'Введённые пароли не совпадают',
                    }
                ),
                    setReg({
                        ...reg,
                        parol: '',
                        povtorParol: '',
                    })
                )
            }
        }
    }

    function registraciyaINN(event: React.ChangeEvent<HTMLSelectElement>) {

        setReg({
            ...reg,
            INN: Number(event.target.value)
        })
    }



    return (
        <form className='registraciya' style={{ display: soobch.displ }} >
            <p>Регистрация пользователя</p>
            <label>
                Выберите Вашу организацию:
                <select onChange={(Event) => registraciyaINN(Event)} >
                    {zakazchikContext.map(zakaz =>
                        <option value={zakaz.INN}>
                            {zakaz.nazvanie}
                        </option>
                    )}
                </select>
            </label>
            <label>Введите логин:
                <input
                    type='text'
                    value={reg.login}
                    onChange={(e) => registrLoginChange(e)}
                    onBlur={(e) => registrLoginBlur(e)}
                    title='Логин'
                />
            </label>
            <label>Введите пароль:
                <input
                    type='password'
                    title='Пароль'
                    value={reg.parol}
                    onChange={(e) => registrParolChange(e)}
                />
            </label>
            <label>Повторите пароль:
                <input
                    type='password'
                    title='Повторный пароль'
                    value={reg.povtorParol}
                    onChange={(e) => registrPovtorParolChange(e)}
                />
            </label>
            <label>{soobch.soobch}</label>
            <button onClick={(Event) => regisraciya(Event, reg.parol, reg.povtorParol)}> Зарегистрироваться</button>
        </form>
    );
};

export default Registraciya;