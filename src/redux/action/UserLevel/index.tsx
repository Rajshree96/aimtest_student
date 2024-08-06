import axios from 'axios';
import Cookies from 'js-cookie';
import { AnyAction, Dispatch } from 'redux';

import {
  getAllUserLevel,
  getParticularUserLevel,
} from 'redux/reducer/UserLevel';
import {
  errorMessage,
  errorr,
  levelCreate,
  levelDelete,
  levelsDelete,
  levelUpdate,
  success,
} from 'components/Toaster/ToasterMessage';
import { url } from 'components/Api/ApiUrl';
import { loader } from 'redux/reducer/Loader';
import showToaster from 'components/Toaster/Toaster';

export const getUserLevels = (token: string) => (dispatch: Dispatch) => {
  axios
    .get(`${url}user/level/user-levels`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(loader(false));
      dispatch(getAllUserLevel(res.data));
    })
    .catch(() => {
      showToaster(errorr, errorMessage);
      dispatch(loader(false));

      console.warn('Something Went Wrong');
    });
};

export const getUserLevel =
  (id: string, token: string) => (dispatch: Dispatch) => {
    axios
      .get(`${url}user/level/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(getParticularUserLevel(res.data));
        dispatch(loader(false));
      })
      .catch(() => {
        dispatch(loader(false));

        console.warn('Something Went Wrong');
        showToaster(errorr, errorMessage);
      });
  };

export const postUserLevel =
  (data: { name: string }, token: string) => (dispatch: Dispatch) => {
    axios
      .post(`${url}user/level`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        showToaster(success, levelCreate);
        dispatch(loader(false));
        dispatch(getUserLevels(token) as unknown as AnyAction);
      })
      .catch(() => {
        console.warn('Something Went Wrong');
        showToaster(errorr, errorMessage);
        dispatch(loader(false));
      });
  };

export const putUserLevel =
  (id: string, data: { name: string }, token: string) =>
  (dispatch: Dispatch) => {
    axios
      .put(`${url}user/level/${id}`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        showToaster(success, levelUpdate);
        dispatch(loader(false));
        dispatch(getUserLevels(token) as unknown as AnyAction);
      })
      .catch(() => {
        console.warn('Something Went Wrong');
        dispatch(loader(false));
        showToaster(errorr, errorMessage);
      });
  };

export const deleteUserLevels =
  (id: string, token: string) => (dispatch: Dispatch) => {
    axios
      .delete(`${url}user/user-level/levels`, {
        headers: {
          Authorization: token,
        },
        data: {
          levelIds: id,
        },
      })
      .then(() => {
        Cookies.remove('delete');
        showToaster(success, id.length === 1 ? levelDelete : levelsDelete);
        dispatch(loader(false));
        dispatch(getUserLevels(token) as unknown as AnyAction);
      })
      .catch(() => {
        console.warn('Something Went Wrong');
        Cookies.remove('delete');
        dispatch(loader(false));
        showToaster(errorr, errorMessage);
      });
  };
