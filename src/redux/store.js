// import {  legacy_createStore as createStore,combineReducers, applyMiddleware} from 'redux'
// // import { configureStore } from '@reduxjs/toolkit'
// import formReducer from './reducer'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// // import { create } from '@mui/material/styles/createTransitions'

// const rootReducer = combineReducers({
//     form:formReducer,
// })

// const middleware = [thunk];


// const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)));

// export default store
import { configureStore } from "@reduxjs/toolkit";
import {formReducer} from "./reducer";
const store = configureStore({
    reducer: {
        form: formReducer,
    },
});

export default store;