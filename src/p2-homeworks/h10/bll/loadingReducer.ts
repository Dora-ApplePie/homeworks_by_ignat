const initState = {
    isLoading: false
}

type initStateType = {
    isLoading: boolean
}

export const loadingReducer = (state: initStateType = initState, action: loadingAT): initStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean): loadingAT => ({type: 'CHANGE-LOADING', isLoading})

type loadingAT = { type: 'CHANGE-LOADING', isLoading: boolean }