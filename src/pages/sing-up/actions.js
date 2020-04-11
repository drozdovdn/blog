import API from 'src/api';
import {push} from 'connected-react-router';

export const changeFieldAction = ({ fieldId, value }) => ({
  type: 'SIGN-UP_CHANGE_DATA_FORM',
  payload: { fieldId, value }
});

export const signUpAction = (data) => {
  return async function(dispatch) {
    try {
      dispatch({type: 'SIGN_UP_REQUEST',});
      const response = await API.user.signUp(data);
      dispatch({type: 'SIGN_UP_SESSION', payload: response.data})
      dispatch(push('/'))
    } catch (error) {
      if(error.response) {
          dispatch({type: 'SIGN_UP_FAIL', payload: error.response.data});
      }
    }
  }

};

export const checkLoginAction = (login) => {
  return async function (dispatch) {
   try {
       dispatch({type: 'SING_UP_CHECK_LOGIN_REQUEST'});
       const response = await API.user.checkLogin(login);
       dispatch({type: 'SING_UP_CHECK_LOGIN_SUCCESS', payload: response.data});
   } catch (error) {
       dispatch({type: 'SING_UP_CHECK_LOGIN_FAIL'});
   }
  }
};

export const singUpUnmountAction = () => ({
   type: 'SING_UP_UNMOUNT'
});

