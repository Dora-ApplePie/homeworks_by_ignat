import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

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
        <div className={s.greeting}>
            <div>
                <input className={inputClass}
                       value={name}
                       onKeyDown={onEnter}
                       onChange={setNameCallback}
                       onBlur={setNameCallback}
                />
                <div className={s.errorMsg}>{error}</div>
            </div>

            <button className={s.btn} onClick={addUser} disabled={!name}>add</button>
            <span className={s.count}>{totalUsers}</span>

        </div>
    )
}

export default Greeting
