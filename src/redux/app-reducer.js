const RESIZE_HEADER = 'RESIZE-HEADER';

const initialState = {appWindowSize: typeof window==='object' ? window.innerWidth : null};


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case RESIZE_HEADER:
            // state.appWindowSize = action.windowSize;
            // return state;
            return  Object.assign({},state,{
                appWindowSize: action.windowSize
            });

        default:
            return state;
    }

};

export const resizeHeaderActionCreator = (width) => ({type: RESIZE_HEADER, windowSize: width});

export default appReducer;