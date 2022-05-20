import React from 'react'
import s from './Affair.module.css'
import {AffairType} from "./HW2";

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: number) => void
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    const priorityClass = s.item + ' ' + s[props.affair.priority]

    return (
        <div className={s.affair}>
            <div className={s.item}><b>{props.affair.name}</b></div>
            <div className={priorityClass}>[{props.affair.priority}]</div>
            <button className={s.btn} onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
