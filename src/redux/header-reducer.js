const RESIZE_HEADER = 'RESIZE-HEADER';
const OPEN_MINI_NAV_MENU = 'OPEN-MINI-NAV-MENU';
const CLOSE_MINI_NAV_MENU = 'CLOSE-MINI-NAV-MENU';


const initialState = {
    appWindowSize: window.innerWidth,
    headerMiniNavMenuOpen: false
};

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESIZE_HEADER:
            return {
                ...state,
                appWindowSize: action.windowSize
            };
        case OPEN_MINI_NAV_MENU:
            return {
                ...state,
                headerMiniNavMenuOpen: true
            };
        case CLOSE_MINI_NAV_MENU:
            return {
                ...state,
                headerMiniNavMenuOpen: false
            };
        default:
            return state;
    }
};

export const resizeHeaderActionCreator = (windowSize) => ({type: RESIZE_HEADER, windowSize: windowSize});
export const openMimiNavMenuActionCreator = () => ({type: OPEN_MINI_NAV_MENU});
export const closeMimiNavMenuActionCreator = () => ({type: CLOSE_MINI_NAV_MENU});


export default headerReducer;