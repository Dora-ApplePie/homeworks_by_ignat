import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    }
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const SetClass = (filter: FilterType) => {
        return s.button + (props.filter === filter ? ' ' + s.active : '')
    }

    return (
        <div>

            {mappedAffairs}
            <SuperButton className={SetClass('all')} onClick={setAll}>All</SuperButton>
            <SuperButton className={SetClass('high')} onClick={setHigh}>High</SuperButton>
            <SuperButton className={SetClass('middle')} onClick={setMiddle}>Middle</SuperButton>
            <SuperButton className={SetClass('low')} onClick={setLow}>Low</SuperButton>
            {/*<button className={SetClass('all')} onClick={setAll}>All</button>*/}
            {/*<button className={SetClass('high')} onClick={setHigh}>High</button>*/}
            {/*<button className={SetClass('middle')} onClick={setMiddle}>Middle</button>*/}
            {/*<button className={SetClass('low')}   onClick={setLow}>Low</button>*/}
        </div>
    )
}

export default Affairs
