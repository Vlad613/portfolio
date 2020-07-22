const RESIZE_HEADER = 'RESIZE-HEADER';

const initialState = {appWindowSize: window.innerWidth};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case RESIZE_HEADER:

            state.appWindowSize = action.windowSize;
            return state;
        default:
            return state;
    }

};

export const resizeHeaderActionCreator = (windowSize) => ({type: RESIZE_HEADER, windowSize: windowSize});

export default appReducer;