import React, { FC, useContext, useState } from 'react';
import { IPolzovatel } from '../../Interfaces/ObchieSwedeniya/Polzovatel';
import MyLablelInput from '../UI/MyLablelIutnp/MyLablelInput';
import IdUserContext from '../Context/IdUserContext';
import PolzovatelContext from '../Context/PolzovatelContext';


const Logirovanie = () => {

    const [logins, setLogin] = useState({ login: '', parol: '' })
    const [soobch, setSoobch] = useState({ soobch: '', displ: '' })
    const polzovatelContext = useContext<IPolzovatel[]>(PolzovatelContext)
    let context = useContext(IdUserContext);
    const [idINN, setidINN] = useState(context)



    function loginChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLogin({
            ...logins,
            login: e.target.value,
        }
        )
    }
    function parolChange(e: React.ChangeEvent<HTMLInputElement>) {
        setLogin({
            ...logins,
            parol: e.target.value,
        }
        )
    }

    function zapros(logUser: string, parolUser: string) {

        for (let i = 0; i < polzovatelContext.length; i++) {
            let user = polzovatelContext[i];

            if (user.login === logUser) {

                if (user.parol === parolUser) {
                    return (
                        setSoobch({
                            ...soobch,
                            displ: 'none',
                        },)
                    )
                }

                else {
                    return (setSoobch({
                        ...soobch,
                        soobch: 'Вы ввели неверный пароль',
                    }))
                }
            }
            else {
                setSoobch({
                    ...soobch,
                    soobch: 'Такого пользователя не существует!'
                })
            }
        }
    }


    function logirovanie(event: React.MouseEvent<HTMLButtonElement>, log: string, par: string) {
        event.preventDefault();

        return (
            zapros(log, par)
        );
    }


    return (

        <form className='logirovanie' style={{ display: soobch.displ }}>
            <p>Логирование</p>
            <MyLablelInput children={'Логин:'} type='text' value={logins.login} onChange={loginChange} />
            <MyLablelInput children={'Пароль:'} type="password" value={logins.parol} onChange={parolChange} />
            <label style={{ color: 'red' }}>{soobch.soobch}</label>
            <button onClick={(Event) => logirovanie(Event, logins.login, logins.parol)}>Войти</button>
        </form>
    );
};

export default Logirovanie;