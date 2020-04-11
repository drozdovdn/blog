import cloneDeep from 'lodash/cloneDeep';

const initState = {
  dataForm: {
    login: '',
    email: '',
    firstName: '',
    lastName: '',
    password: ''
  },
    errors: {
      login: '',
      email: '',
      firstName: '',
      lastName: '',
      password: ''
  }
};

function merge(state, someObject) {
  const clonnedState = cloneDeep(state);
  return Object.assign(clonnedState, someObject);
}

function mapErrorFromServer(errorFromServer) {
   const errorCode = Object.keys(errorFromServer)[0];
   switch (errorCode) {
       case 'unique':
         return 'Такой логин занят!';
       case 'isRequired':
         return 'Поле обязаткльно для заполнения!';
       case 'minLength':
         return 'Минимальная длинна пароля 3 символа';
       default:
         return errorCode;
   }
}

function getFormErrors(payload) {
  const errorKeys = Object.keys(payload);
  const errors = errorKeys.reduce(function (result,errorKeys) {
    const errorFromServer = payload[errorKeys];
      result[errorKeys] = mapErrorFromServer(errorFromServer);
      return result;
  }, {});
  return errors;
}
export default function signUpReducer(state = initState, action) {
  switch (action.type) {
    case 'SIGN-UP_CHANGE_DATA_FORM':
      return merge(state, {
        dataForm: {
          ...state.dataForm,
          [action.payload.fieldId]: action.payload.value
        }
      });
      case 'SING_UP_CHECK_LOGIN_SUCCESS':
        return {
          ...state,
          errors: {
            ...state.errors,
              login: action.payload.exists && 'Такой логин уже занят!'
          }
        };
      case 'SIGN_UP_FAIL':
        return {
            ...state,
            errors: getFormErrors(action.payload)
        };
      case 'SING_UP_UNMOUNT':
        return {
          ...initState
        };
    default:
      return state;
  }
}
