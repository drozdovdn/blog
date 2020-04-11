const initState = {
    dataForm: {
        currentPassword: '',
        newPassword: ''
    },
    errors: {
        currentPassword: '',
        newPassword: ''
    }
};
function mapErrorFromServer(errorFromServer) {
    const errorCode = Object.keys(errorFromServer)[0];
    switch (errorCode) {
        case 'isRequired':
            return 'Поле обязаткльно для заполнения!';
        case 'minLength':
            return 'Минимальная длинна пароля 3 символа!';
        default:
            return errorCode;
    }
}
function errorsPassword(data) {
    const errorKeys = Object.keys(data);
    const errors = errorKeys.reduce(function (result, errorKeys) {
        const errorFromServer = data[errorKeys];
        result[errorKeys] = mapErrorFromServer(errorFromServer);
        return result;
    }, {});
    return errors;
}

export default function modalReduser(state = initState, action) {
    switch (action.type) {
        case 'MODAL_CHANGE_DATA_FORM':
            return {
                ...state,
                dataForm: {
                    ...state.dataForm,
                    [action.payload.fieldId]: action.payload.value
                }
            };
        case 'MODAL_CHANGE_CURRENT_PASSWORD_REQUEST':
            return {
              ...state,
              errors: {
                  ...initState.errors
              }
            };
        case 'MODAL_CHANGE_CURRENT_PASSWORD_SUCCESS':
             return {
               ...state
             };
        case 'MODAL_CHANGE_CURRENT_NEW_PASSWORD_FAIL':
            return {
              ...state,
              errors: {
                  ...state.errors,
                  currentPassword: 'Пароль введен не верно!'
              }
            };
        case 'MODAL_CHANGE_CURRENT_PASSWORD_FAIL':
            return {
                ...state,
                errors: errorsPassword(action.payload)
            };
        case 'MODAL_UNMOUNT':
            return {
              ...initState
            };
        default:
            return state;
    }
};