import * as types from './actionTypes';
export function addFeature(data) {
    return {
        type: types.ADD_FEATURE,
        payload: data

    }
};