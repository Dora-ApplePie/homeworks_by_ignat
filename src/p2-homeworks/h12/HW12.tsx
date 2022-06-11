import React from "react";
import s from "./HW12.module.css";
import {AppStoreType} from "../h10/bll/store";
import {useDispatch, useSelector} from "react-redux";
import {changeThemeC, StateType} from "./bll/themeReducer";
import SuperRadio from "../h7/common/c6-SuperRadio/SuperRadio";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const {theme} = useSelector<AppStoreType, StateType>((state) => state.theme)
    const dispatch = useDispatch()

    const onChangeCallback = (option: string) => {
        dispatch(changeThemeC(option))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <div className={s[theme]}>
                <div><br/></div>
                <SuperRadio value={theme} options={themes} onChangeOption={onChangeCallback}/>
            </div>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
