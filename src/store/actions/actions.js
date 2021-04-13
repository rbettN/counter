export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

export const increment = () => {
    return {
        type: INCREMENT
    }
};

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const add = (value) => {
    return {
        type: ADD,
        value: value

    }
};

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        value: value
    }
};

export const saveResult = (result) => {
    return {
        type: STORE_RESULT,
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
        type: DELETE_RESULT,
        resultId: resultId
    }
};