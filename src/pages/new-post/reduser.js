import cloneDeep from 'lodash/cloneDeep';

const initState = {
    dataForm: {
        title: '',
        content: ''
    }
};

function merge(state, someObject) {
    const clonnedState = cloneDeep(state);

    return Object.assign(clonnedState, someObject);
}

export default function newPostReducer(state = initState, action) {
    switch (action.type) {
        case 'NEW_POST_CHANGE_DATA_FORM':
            return merge(state, {
                dataForm: {
                    ...state.dataForm,
                    [action.payload.fieldId]: action.payload.value
                }
            });
        case 'NEW_POST_UNMOUNT':
            return {
              ...initState
            };
        default:
            return state;
    }
}