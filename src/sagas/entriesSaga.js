import {delay, take, put, call} from 'redux-saga/effects'
import entriesTypes from '../actions/entries.actions'
import axios from 'axios'
import types from '../actions/entries.actions';

export function* getAllEntries(){
    yield take(entriesTypes.GET_ENTRIES);

    const result = yield call(axios, 'http://localhost:3002/entries')
    console.log('Res', result)
    yield put({type: types.POPULATE_ENTRIES, payload: result.data})
 
}

// export function* sortByValue(){
//     yield take(entriesTypes.SORT_ENTRIES);
//     console.log('From saga')
// }