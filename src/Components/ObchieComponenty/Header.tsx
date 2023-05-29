import React, { useState, FC, useContext } from 'react';
import Logirovanie from './Logirovanie';
import Registraciya from './Registraciya';
import { NavLink } from 'react-router-dom';



const Header = () => {

    const [logirovanir, setLogirovanir] = useState(<></>)

    function logirovanie(e: React.MouseEvent) {
        e.preventDefault()
        setLogirovanir(<Logirovanie />)
    }

    function registrac(e: React.MouseEvent) {
        e.preventDefault()
        setLogirovanir(<Registraciya />)
    }

    return (
        <header>
            <nav>
                <ul>
                    <NavLink to={'./DialogOkno.tsx'}>
                        Основное меню
                    </NavLink>
                    <NavLink to={'../Zayavka'}>
                        Подача заявок
                    </NavLink>
                    <NavLink to={'./DialogOkno.tsx'}>
                        Сведения о заказчиках
                    </NavLink>
                    <NavLink onClick={logirovanie} to={'./Logirovanie'}>
                        Логирование
                    </NavLink>
                    <NavLink onClick={registrac} to={'./Registraciya'}>
                        Регистрация
                    </NavLink>
                </ul>
                {logirovanir}
            </nav>
        </header>
    );
};

export default Header;