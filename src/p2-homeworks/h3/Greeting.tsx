import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    onEnter: (e: KeyboardEvent<HTMLInputElement>) => void
    error: string
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onEnter} // деструктуризация пропсов
) => {
    const inputClass = error ? s.errorInput : ''

    return (
        <div className={s.greetingContainer}>
            <div className={s.greetingInputBtn}>
                <SuperInputText
                    className={inputClass}
                    value={name}
                    onKeyDown={onEnter}
                    onChange={setNameCallback}
                    onBlur={setNameCallback}
                    error={error}
                />
                {/*<div className={s.errorMsg}>{error}</div>*/}

            <SuperButton onClick={addUser} disabled={!name} >
               add
            </SuperButton>
            </div>
            <span className={s.count}>{totalUsers}</span>

        </div>
    )
}

export default Greeting
