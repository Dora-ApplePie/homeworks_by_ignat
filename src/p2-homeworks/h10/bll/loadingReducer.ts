const initState = {
    isLoading: false
}

type initStateType = {
    isLoading: boolean
}

export const loadingReducer = (state: initStateType = initState, action: loadingAT): initStateType => { // fix any
    switch (action.type) {
        case 'loading': {
            return {...state, isLoading: action.payload}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return {
        type: 'loading', payload: isLoading
    } as const
} //fix ANY

type loadingAT =  ReturnType<typeof loadingAC>