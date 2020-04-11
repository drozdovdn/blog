import API from 'src/api';

const registrationDate=(Date)=> {
    const regDate = Date.registrationDate;
    let index = 0;
    for (let i=0; i<regDate.length; i++) {
        if(regDate[i] === 'T') {
            index = i;
        }
    }
    let str = regDate.slice(0, index);
    let newRegDate = str.split('-').reverse().join('.');
    return {
        ...Date,
        registrationDate: newRegDate
    }
};

export const getMyPageAction = (id) => {
  return async function (dispatch) {
      try {
          dispatch({type: 'GET_MY_PAGE_REQUEST'});
          const response = await API.myPage.getMyPage(id);
          const newResponse = registrationDate(response.data);
          dispatch({type: 'GET_MY_PAGE_SUCCESS', payload: newResponse});
      } catch (error) {
          dispatch({type: 'GET_MY_PAGE_FAIL'});
      }
  }
};

export const createFlagShowModal=() => ({
    type: 'MY_PAGE_CREATE_FLAG_MODAL'
});
export const myPageUnmountAction = () => ({
    type: 'MY_PAGE_UNMOUNT'
});