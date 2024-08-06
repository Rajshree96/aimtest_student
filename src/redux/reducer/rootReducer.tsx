import { combineReducers } from '@reduxjs/toolkit';

import loginSlice from '../reducer/Login/index';
import loaderSlice from '../reducer/Loader/index';
import sideBarSlice from '../reducer/Sidebar/index';
import packageSlice from '../reducer/Package/index';
import sectionSlice from '../reducer/Section/index';
import elementSlice from '../reducer/Element/index';
import classSlice from '../reducer/Class/index';
import passageSlice from '../reducer/Passage/index';
import userLevelSlice from '../reducer/UserLevel/index';
import userSlice from '../reducer/User/index';
import questionSlice from '../reducer/Question/index';
import numberTestSlice from '../reducer/Test/NumberTest/index';
import examSlice from '../reducer/Exam/index';

export const rootReducer = combineReducers({
  login: loginSlice,
  loader: loaderSlice,
  section: sectionSlice,
  element: elementSlice,
  userLevel: userLevelSlice,
  user: userSlice,
  sideBar: sideBarSlice,
  package: packageSlice,
  class: classSlice,
  passage: passageSlice,
  question: questionSlice,
  numberTest: numberTestSlice,
  exam: examSlice,
});
