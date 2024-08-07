import axios from 'axios';
import Cookies from 'js-cookie';
import { AnyAction, Dispatch } from 'redux';

import {
  errorMessage,
  errorr,
  elementCreate,
  elementDelete,
  elementsDelete,
  elementUpdate,
  success,
} from 'components/Toaster/ToasterMessage';
import { url } from 'components/Api/ApiUrl';
import { loader } from 'redux/reducer/Loader';
import showToaster from 'components/Toaster/Toaster';
import { getAllElement, getParticularElement } from 'redux/reducer/Element';

export const getElements = (token: string) => (dispatch: Dispatch) => {
  axios
    .get(`${url}elements`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(loader(false));
      dispatch(getAllElement(res.data));
    })
    .catch(() => {
      showToaster(errorr, errorMessage);
      dispatch(loader(false));
      console.warn('Something Went Wrong');
    });
};

export const getElement =
  (id: string, token: string) => (dispatch: Dispatch) => {
    axios
      .get(`${url}element/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(getParticularElement(res.data));
        dispatch(loader(false));
      })
      .catch(() => {
        dispatch(loader(false));
        console.warn('Something Went Wrong');
        showToaster(errorr, errorMessage);
      });
  };

export const postElementData =
  (
    data: {
      name: string;
      section: { _id: string; name: string };
      displayInReport: boolean;
    },
    token: string
  ) =>
  (dispatch: Dispatch) => {
    axios
      .post(`${url}element`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        showToaster(success, elementCreate);
        dispatch(loader(false));
        dispatch(getElements(token) as unknown as AnyAction);
      })
      .catch(() => {
        console.warn('Something Went Wrong');
        showToaster(errorr, errorMessage);
        dispatch(loader(false));
      });
  };

export const putElementData =
  (
    id: string,
    data: {
      name: string;
      section: { _id: string; name: string };
      displayInReport: boolean;
    },
    token: string
  ) =>
  (dispatch: Dispatch) => {
    axios
      .put(`${url}element/${id}`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        showToaster(success, elementUpdate);
        dispatch(loader(false));
        dispatch(getElements(token) as unknown as AnyAction);
      })
      .catch(() => {
        console.warn('Something Went Wrong');
        dispatch(loader(false));
        showToaster(errorr, errorMessage);
      });
  };

export const deleteElements =
  (id: string, token: string) => (dispatch: Dispatch) => {
    axios
      .delete(`${url}elements`, {
        headers: {
          Authorization: token,
        },
        data: {
          elementIds: id,
        },
      })
      .then(() => {
        Cookies.remove('delete');
        showToaster(success, id.length === 1 ? elementDelete : elementsDelete);
        dispatch(loader(false));
        dispatch(getElements(token) as unknown as AnyAction);
      })
      .catch(() => {
        console.warn('Something Went Wrong');
        Cookies.remove('delete');
        dispatch(loader(false));
        showToaster(errorr, errorMessage);
      });
  };
