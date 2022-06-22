import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {requestApi, ResponseInfoType} from './RequestsAPI';
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';


export const Request = () => {

    const [isChecked, setIsChecked] = React.useState<boolean>(true)
    const [info, setInfo] = React.useState<ResponseInfoType>()

    const sendRequest = () => {
        requestApi.sendValue({success: isChecked})
            .then(res => setInfo(res))
            .catch(error => {
                setInfo(error)
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
    }

    return(
        <div>
            <br/>
            <SuperCheckbox checked={isChecked} onChangeChecked={setIsChecked}>Check</SuperCheckbox>
            <br/>
            <SuperButton onClick={sendRequest}>Send Request</SuperButton>
            <div>
                <span>errorText: </span>
                <span>{info && info.errorText}</span>
            </div>
            <div>
                <span>info: </span>
                <span>{info && info.info}</span>
            </div>
        </div>
    )
}