// const initialState = {
//     formData:{},
// };

// const formReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_FORM_DATA':
//             return {
//                 ...state,
//                 formData:action.payload
//             }
        
//         default:
//             return state;
//     }
// };



// export default formReducer;
import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    formData:{},
};

export const formReducer = createReducer(initialState, {
    AddFormData: (state, action) => {
        state.formData = action.payload;
    },
})