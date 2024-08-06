import axios from 'axios';
import Cookies from 'js-cookie';
import { AnyAction, Dispatch } from 'redux';

import {
  errorr,
  errorMessage,
  success,
  passageCreate,
  passageUpdate,
  passageDelete,
  passagesDelete,
} from 'components/Toaster/ToasterMessage';
import { url } from 'components/Api/ApiUrl';
import { loader } from 'redux/reducer/Loader';
import showToaster from 'components/Toaster/Toaster';
import { getAllPassage, getParticularPassage } from 'redux/reducer/Passage';

export const getPassages = (token: string) => (dispatch: Dispatch) => {
  axios
    .get(`${url}passages`, {
      headers: {
        Authorization: token as unknown as string,
      },
    })
    .then((res) => {
      dispatch(loader(false));
      dispatch(getAllPassage(res.data));
    })
    .catch(() => {
      console.warn('Something Went Wrong');
      showToaster(errorr, errorMessage);
      dispatch(loader(false));
    });
};

export const postpassageData =
  (data: passageDataType, token: string) => (dispatch: Dispatch) => {
    axios
      .post(`${url}passage`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        showToaster(success, passageCreate);
        dispatch(loader(false));
        dispatch(getPassages(token) as unknown as AnyAction);
      })
      .catch(() => {
        console.warn('Something Went Wrong');
        showToaster(errorr, errorMessage);
        dispatch(loader(false));
      });
  };

export const getPassage =
  (id: string, token: string) => (dispatch: Dispatch) => {
    axios
      .get(`${url}passage/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(getParticularPassage(res.data));
        dispatch(loader(false));
      })
      .catch(() => {
        dispatch(loader(false));
        console.warn('Something Went Wrong');
        showToaster(errorr, errorMessage);
      });
  };

export const putPassageData =
  (id: string, data: passageDataType, token: string) =>
  (dispatch: Dispatch) => {
    axios
      .put(`${url}passage/${id}`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        showToaster(success, passageUpdate);
        dispatch(loader(false));
        dispatch(getPassages(token) as unknown as AnyAction);
      })
      .catch(() => {
        console.warn('Something Went Wrong');
        dispatch(loader(false));
        showToaster(errorr, errorMessage);
      });
  };

export const deletePassages =
  (id: string, token: string) => (dispatch: Dispatch) => {
    axios
      .delete(`${url}passages`, {
        headers: {
          Authorization: token,
        },
        data: {
          passageIds: id,
        },
      })
      .then(() => {
        Cookies.remove('delete');
        showToaster(success, id.length === 1 ? passageDelete : passagesDelete);
        dispatch(loader(false));
        dispatch(getPassages(token) as unknown as AnyAction);
      })
      .catch(() => {
        console.warn('Something Went Wrong');
        Cookies.remove('delete');
        dispatch(loader(false));
        showToaster(errorr, errorMessage);
      });
  };
