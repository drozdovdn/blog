import API from 'src/api';
import {push} from 'connected-react-router';

export const changeFieldAction = ({fieldId, value}) => ({
   type: 'NEW_POST_CHANGE_DATA_FORM',
   payload: {fieldId, value}
});

export const newPostAction = (data) => {
   return async function (dispatch) {
       try{
          await API.posts.newPost(data);
          dispatch({type:'NEW_POST_SUCCESS'});
          dispatch(push('/'));
       } catch (error) {
           dispatch({type: 'NEW_POST_FAIL'});
       }
   }
}