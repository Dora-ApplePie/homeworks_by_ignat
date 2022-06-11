import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState<number>(100)


    const onChangeInputRangeHandle = (num: number) => {
        if (num >= value2) return
        setValue1(num)
    }

    const onChangeDoubleInputRangeHandle = (nums: Array<number>) => {
        setValue1(nums[0])
        setValue2(nums[1])
    }

    return (
        <div>
            <div style={{width: '60%'}}>
                <h3>homeworks 11</h3>
                <br/>
                <div>
                    <SuperRange
                        value={value1}
                        min={0}
                        max={100}
                        bgColor={'#4ac730'}
                        onChangeRange={onChangeInputRangeHandle}
                    />
                    <span>{value1}</span>
                </div>
                <br/>
                <br/>
                <br/>
                <div>
                    <SuperDoubleRange
                        value={[value1, value2]}
                        min={0}
                        max={100}
                        onChangeRange={onChangeDoubleInputRangeHandle}
                        setValue1={setValue1}
                        setValue2={setValue2}
                    />
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <span>{value1}</span>
                        <span>{value2}</span>
                    </div>
                </div>
            </div>
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
