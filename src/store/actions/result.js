import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
}

/*The idea is to create asynchornous action creators which dispatch actions created by synchronous ones*/
export const storeResult = (result) => {
    /*The dipatch argument is given due to Redux Thunk, which runs between the dispatch of an
    action and the point that the action reaches the reducer*/
    return function (dispatch) {
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 2000);
    }
};

export const deleteResult = (resultId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: resultId
    }
};