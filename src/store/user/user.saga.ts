import { put, takeEvery, all, call } from 'redux-saga/effects';
import axiosInstance from '../../modules/axios/axios.module';
import sessionService from '../../services/session/session.service';
import { GetSession } from '../../services/user/user.types';
import { userActions } from "./user.slice";
import { AccessTokenStorageKey } from './user.types';

export function* login(props: any){
       
    try{
        yield put(userActions.setSettings({ isLoading: true}));
        const { email, password } = props.payload;    

        const { data: {user, acessToken }} = yield call(sessionService().postSessionNew, {email, password});
        console.log(acessToken);
        localStorage.setItem(AccessTokenStorageKey, acessToken);

        yield put(userActions.setData({ ...user }));

    }catch(error){
        // @ts-ignore
        yield put(userActions.setError(error.response.data.message));
    }
    finally{
        yield put(userActions.setSettings({ isLoading: false}));
    }   
}

function* watchLogin(){
    yield takeEvery( 'user/login', login );
}

export function* loginByToken() {
    try{
        const accessToken = localStorage.getItem(AccessTokenStorageKey);

        if(accessToken){
            const { data: {userId: id} }: GetSession = yield call(sessionService().getSession, accessToken);

            yield put(userActions.setData({ id }))
        }
    }
    catch(error){
        // @ts-ignore
        yield put(userActions.setError(error.response.data.message));
    }
}

export default function* userSaga(){
    yield all([
        watchLogin(),
        loginByToken(),
    ])
}