const RESIZE_WINDOW_FOR_MOBILE = 'RESIZE-WINDOW-FOR-MOBILE';
const RESIZE_WINDOW_FOR_PC = 'RESIZE-WINDOW-FOR-PC';

const initialState = {smallHeaderMenu: false};


const appReducer = (state=initialState, action) => {
    switch (action.type) {
        case RESIZE_WINDOW_FOR_MOBILE:
            state.smallHeaderMenu = true;
            return state;

        case RESIZE_WINDOW_FOR_PC:
            state.smallHeaderMenu = false;
            return state;
        default:
            return state;
    }
};

export const resizeHeaderForMobileActionCreator = () => ({type: RESIZE_WINDOW_FOR_MOBILE});
export const resizeHeaderForPCActionCreator = () => ({type: RESIZE_WINDOW_FOR_PC});

export default appReducer;