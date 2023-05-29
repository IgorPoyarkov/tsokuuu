import React, { useState, FC } from 'react';
import { IPolzovatel } from '../../Interfaces/ObchieSwedeniya/Polzovatel';
import Logirovanie from './Logirovanie';


interface IDialogOknoProps<T> {
    dialogokno: T[];
    renderDialog: (dialogokn: T) => React.ReactNode
}


function DialogOkno<T>(params: IDialogOknoProps<T>) {


    let [state, setState] = useState<string>('')

    function haidDialogOkno() {
        setState('none')
    }

    return (
        <>
            <div
                className='dialogOkno'
                onClick={haidDialogOkno}
                style={{ display: state }
                }
            >
                {params.dialogokno.map(params.renderDialog)}

            </div>
        </>
    );
};

export default DialogOkno;