const RESIZE_HEADER = 'RESIZE-HEADER';

const initialState = {appWindowSize: 4000};


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case RESIZE_HEADER:
            debugger
            state.appWindowSize = action.windowSize;
            return state;

        default:
            return state;
    }

};

export const resizeHeaderActionCreator = (windowSize) => ({type: RESIZE_HEADER, windowSize: windowSize});

export default appReducer;