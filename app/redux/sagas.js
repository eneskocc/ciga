import { takeLatest, takeEvery, call, put, select, delay } from 'redux-saga/effects';
import * as $ from './actions';

import axios from 'axios';




function* handler() {
    yield takeLatest($.GET_USER, FUNC_GET_USER);
}

function* FUNC_GET_USER(){
    try {
        yield put ({
            type:$.GET_USER_REQUEST
        })
        const response = yield axios.get('https://dummyjson.com/users?limit=10')
       console.log(response.data.users)
        if(response.data.status==0){
            yield put({
                type:$.GET_USER_REQUEST_FAILURE,
                ERROR:response.data.errorMessage
            })
        }
        else{
       
            yield put({
                type:$.GET_USER_REQUEST_SUCCESS,
                USER:response.data.users,
            })
        }
    } catch (error) {
        yield put({
            type:$.GET_USER_REQUEST_FAILURE,
            ERROR:error
        })
    }
    finally{
        yield put({
            type:$.GET_USER_REQUEST_END
        })
    }
}

export { handler };