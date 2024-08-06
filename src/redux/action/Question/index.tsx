import axios from 'axios';
import Cookies from 'js-cookie';
import { AnyAction, Dispatch } from 'redux';

import {
  errorMessage,
  errorr,
  questionCreate,
  questionUpdate,
  questionDelete,
  questionsDelete,
  success,
} from 'components/Toaster/ToasterMessage';
import { url } from 'components/Api/ApiUrl';
import { loader } from 'redux/reducer/Loader';
import showToaster from 'components/Toaster/Toaster';
import { getAllQuestion, getParticularQuestion } from 'redux/reducer/Question';

export const getQuestions = (token: string) => (dispatch: Dispatch) => {
  axios
    .get(`${url}questions`, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(loader(false));
      dispatch(getAllQuestion(res.data));
    })
    .catch(() => {
      showToaster(errorr, errorMessage);
      dispatch(loader(false));
    });
};

export const getQuestion =
  (id: string, token: string) => (dispatch: Dispatch) => {
    axios
      .get(`${url}question/${id}`, {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        dispatch(getParticularQuestion(res.data));
        dispatch(loader(false));
      })
      .catch(() => {
        dispatch(loader(false));
        showToaster(errorr, errorMessage);
      });
  };

export const addQuestion =
  (
    data: {
      class: {
        name: string;
        _id: string;
      };
      difficultyLevel: string;
      element: {
        _id: string;
        name: string;
      };
      marks: string;
      section: {
        name: string;
        _id: string;
      };
      type: string;
      options: {
        title: string;
        isCorrect: boolean;
        percentage: string;
      }[];
    },
    token: string
  ) =>
  (dispatch: Dispatch) => {
    axios
      .post(`${url}question`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        showToaster(success, questionCreate);
        dispatch(loader(false));
        dispatch(getQuestions(token) as unknown as AnyAction);
      })
      .catch(() => {
        showToaster(errorr, errorMessage);
        dispatch(loader(false));
      });
  };

export const putQuestionData =
  (
    id: string,
    data: {
      class: {
        name: string;
        _id: string;
      };
      difficultyLevel: string;
      element: {
        _id: string;
        name: string;
      };
      marks: string;
      section: {
        name: string;
        _id: string;
      };
      type: string;
      options: {
        title: string;
        isCorrect: boolean;
        percentage: string;
      }[];
    },
    token: string
  ) =>
  (dispatch: Dispatch) => {
    axios
      .put(`${url}question/${id}`, data, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => {
        showToaster(success, questionUpdate);
        dispatch(loader(false));
        dispatch(getQuestions(token) as unknown as AnyAction);
      })
      .catch(() => {
        dispatch(loader(false));
        showToaster(errorr, errorMessage);
      });
  };

export const deleteQuestions =
  (id: string, token: string) => (dispatch: Dispatch) => {
    axios
      .delete(`${url}questions`, {
        headers: {
          Authorization: token,
        },
        data: {
          questionIds: id,
        },
      })
      .then(() => {
        Cookies.remove('delete');
        showToaster(
          success,
          id.length === 1 ? questionDelete : questionsDelete
        );
        dispatch(loader(false));
        dispatch(getQuestions(token) as unknown as AnyAction);
      })
      .catch(() => {
        dispatch(loader(false));
        showToaster(errorr, errorMessage);
      });
  };
