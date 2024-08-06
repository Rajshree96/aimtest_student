import axios from 'axios';
import Cookies from 'js-cookie';
import { AnyAction, Dispatch } from 'redux';

import {
  errorMessage,
  errorr,
  testCreate,
  testDelete,
  testsDelete,
  testUpdate,
  success,
} from 'components/Toaster/ToasterMessage';
import { url } from 'components/Api/ApiUrl';
import {
  getAllNumberTest,
  getParticularNumberTest,
} from 'redux/reducer/Test/NumberTest';
import { loader } from 'redux/reducer/Loader';
import showToaster from 'components/Toaster/Toaster';

export const getNumberTests = (token: string) => (dispatch: Dispatch) => {
  axios
    .get(`${url}memory/number-tests`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(loader(false));
      dispatch(getAllNumberTest(res.data));
    })
    .catch(() => {
      showToaster(errorr, errorMessage);
      dispatch(loader(false));

      console.warn('Something Went Wrong');
    });
};

export const getNumberTest =
  (id: string, token: string) => (dispatch: Dispatch) => {
    axios
      .get(`${url}memory/number-test/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(getParticularNumberTest(res.data));
        dispatch(loader(false));
      })
      .catch(() => {
        dispatch(loader(false));

        console.warn('Something Went Wrong');
        showToaster(errorr, errorMessage);
      });
  };

export const postNumberTest =
  (data: TestValues, token: string) => (dispatch: Dispatch) => {
    axios
      .post(`${url}memory/number-test`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        showToaster(success, testCreate);
        dispatch(loader(false));
        dispatch(getNumberTests(token) as unknown as AnyAction);
      })
      .catch(() => {
        console.warn('Something Went Wrong');
        showToaster(errorr, errorMessage);
        dispatch(loader(false));
      });
  };

export const putNumberTest =
  (id: string, data: TestValues, token: string) => (dispatch: Dispatch) => {
    axios
      .put(`${url}number/test/${id}`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        showToaster(success, testUpdate);
        dispatch(loader(false));
        dispatch(getNumberTests(token) as unknown as AnyAction);
      })
      .catch(() => {
        console.warn('Something Went Wrong');
        dispatch(loader(false));
        showToaster(errorr, errorMessage);
      });
  };

export const deleteNumberTests =
  (id: string, token: string) => (dispatch: Dispatch) => {
    axios
      .delete(`${url}number/test`, {
        headers: {
          Authorization: token,
        },
        data: {
          numberIds: id,
        },
      })
      .then(() => {
        Cookies.remove('delete');
        showToaster(success, id.length === 1 ? testDelete : testsDelete);
        dispatch(loader(false));
        dispatch(getNumberTests(token) as unknown as AnyAction);
      })
      .catch(() => {
        console.warn('Something Went Wrong');
        Cookies.remove('delete');
        dispatch(loader(false));
        showToaster(errorr, errorMessage);
      });
  };
