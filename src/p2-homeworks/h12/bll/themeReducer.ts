const initState = {
    theme: 'red'
};

export type StateType = typeof initState
type ActionsThemeType = ReturnType<typeof changeThemeC>

export const themeReducer = (state = initState, action: ActionsThemeType): any => { // fix any
    switch (action.type) {
        case 'CHANGE_THEME': {
            return {
                ...state,
                theme: action.themeOption
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (themeOption: string) => ({type: 'CHANGE_THEME', themeOption} as const); // fix any