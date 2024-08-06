import axios from 'axios';
import { Dispatch } from 'redux';

import { url } from 'components/Api/ApiUrl';
import { login } from 'redux/reducer/Login';
import { loader } from 'redux/reducer/Loader';
import showToaster from 'components/Toaster/Toaster';
import {
  errorMessage,
  errorr,
  loginSuccess,
  success,
} from 'components/Toaster/ToasterMessage';

const postLogin = (data: loginType) => async (dispatch: Dispatch) => {
  await axios
    .post(`${url}login`, data)
    .then((response) => {
      dispatch(loader(false));
      showToaster(success, loginSuccess);
      dispatch(login(response?.data?.token));
    })
    .catch(() => {
      showToaster(errorr, errorMessage);
      dispatch(loader(false));
      console.warn('Something Went Wrong');
    });
};
export default postLogin;
