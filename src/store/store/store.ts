import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import userSaga from "../user/user.saga";
// import { userSaga } from "../user/user.saga";
import { userReducer } from "../user/user.slice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {user: userReducer},
    middleware: [sagaMiddleware],
})

sagaMiddleware.run(userSaga);

export default store;