import API from 'src/api';

export const changeModalFormAction = ({ fieldId, value }) => ({
    type: 'MODAL_CHANGE_DATA_FORM',
    payload: { fieldId, value }
});

export  const  closeModalAction = () => ({
    type: 'MY_PAGE_CREATE_FLAG_MODAL'
});

export const currentPasswordAction = (data) => {
    return async function (dispatch) {
        try {
            dispatch({type: 'MODAL_CHANGE_CURRENT_PASSWORD_REQUEST'});
            const response = await API.modal.getCurrentPassword(data);
            if(response.data.success === true ) {
                dispatch({type: 'MODAL_CHANGE_CURRENT_PASSWORD_SUCCESS', payload: response.data});
            } else if(response.data.error === true) {
                dispatch({type: 'MODAL_CHANGE_CURRENT_NEW_PASSWORD_FAIL', payload: response.data});
            }
        } catch (error) {
            dispatch({type: 'MODAL_CHANGE_CURRENT_PASSWORD_FAIL', payload: error.response.data});
        }
    }
};

export const modalUnmount = () => ({
    type: 'MODAL_UNMOUNT'
});