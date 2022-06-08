import {initialPeople, UserType} from "../HW8";

export const homeWorkReducer = (state: UserType[] = initialPeople, action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const copyState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                if (a.name < b.name) return -1
                else return 0
            })

            return action.payload === 'up' ? copyState : copyState.reverse()
        }
        case 'check': {

            return [...state].filter(p => p.age >= action.payload)
        }
        default:
            return state
    }
}


export const sortAC = (direct: string) => {
    return {
        type: 'sort',
        payload: direct
    } as const
}

export const checkAC = (age: number) => {
    return {
        type: 'check',
        payload: age
    } as const
}

type sortAT = ReturnType<typeof sortAC>
type checkAT = ReturnType<typeof checkAC>

type ActionType = sortAT | checkAT