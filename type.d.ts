interface childrenType {
  children: ReactNode;
}

interface sectionModalType {
  show: boolean;
  onClose: () => void;
  content?: string;
  todo?: string;
  deleteCount?: number;
  deleteValue?: string;
  deleteType?: string;
  editValue?: string;
  editId?: string;
  deleteId?: string | string[];
  pageNumber?: number;
  setPageNumber?: Dispatch<SetStateAction<number>>;
}
interface sectionDataType {
  _id: string;
  sectionName: string;
}
interface headerProps {
  setShowSideBar: Dispatch<SetStateAction<boolean>>;
}

interface loginState {
  loginData: [];
}

interface storeType {
  loginSlice: loginState;
}

interface loginType {
  userName: string;
  password: string;
}

interface forgotType {
  email: string;
}

interface resetPasswordType {
  password: string;
  confirmPassword?: string;
  email?: string;
  token?: string;
}

interface modalType {
  show: boolean;
  onClose: () => void;
  content?: string;
  todo?: string;
  deleteCount?: number;
  deleteValue?: string;
  deleteType?: string;
  editValue?: string;
  editId?: string;
  deleteId?: string | string[];
  pageNumber?: number;
  setPageNumber?: Dispatch<SetStateAction<number>>;
  editData?: {
    _id: string;
    name: string;
    label: string;
  };
}

interface sectionDataType {
  _id: string;
  name: string;
}
interface elementDataType {
  _id: string;
  section: {
    _id: string;
    name: string;
  };
  name: string;
  questionBank: number;
}
interface classDataType {
  _id: string;
  name: string;
}
interface userDataType {
  _id: string;
  sections: [
    {
      _id: string;
      name: string;
    }
  ];
  level: {
    _id: string;
    name: string;
  };
  userName: string;
  password: string;
  name: string;
  mobile: string;
  email: string;
  status?: boolean;
}

interface loaderState {
  loader: boolean;
}
interface sectionState {
  sectionData: [];
  particularSectionData: [];
}
interface userLevelState {
  userLevelData: [];
  particularUserLevelData: [];
}
interface userState {
  userData: [];
  particularUserData: [];
}
interface elementState {
  elementData?: [];
  particularElementData?: [];
}
interface classState {
  classData?: [];
  particularClassData?: [];
}

interface SelectType {
  _id?: string;
  label: string;
  attemptCount?: number;
}
interface SelectType1 {
  _id: string;
  label: string;
}
interface MultiSelectType {
  label: string;
  value?: string;
  _id?: string;
  name?: string;
  __v?: number;
}

interface userLevelDataType {
  _id: string;
  name: string;
}

interface postUserData {
  level: {
    _id?: string;
    name: string;
  };
  sections: never[];
  userName: string;
  name: string;
  email: string;
  mobile: string;
  status?: string | boolean;
}

interface packageDataType {
  _id?: string;
  name: string;
  type: string;
  amount: string | number;
  discountAmount: string | number;
  logo: string;
  days: number;
  description: string;
  status?: string | boolean;
  attemptCount?: string | number;
}

interface tablePropsType {
  setValues: (arg0: string[]) => void;
  setPage: Dispatch<SetStateAction<number>>;
  searchData: string;
  todo?: string;
  valueOfPage?: number;
}

interface classData {
  _id: string;
  name: string;
}
interface passageDataType {
  title: string;
  description: string;
}
// ------Question add type =======
interface formsType {
  menuName: string;
}
interface setObjectValue {
  e: { label: string; _id: string };
  setFieldValue: (arg0: string, arg1: { _id: string; name: string }) => void;
  fieldName: string;
}
interface setSingleValue {
  e: { label: string; _id: string };
  setFieldValue: (arg0: string, arg1: string) => void;
  fieldName: string;
}

interface SelectFieldType {
  placeholder: string;
  applyValidation?: string;
  disable?: boolean;
  name: string;
  value: string;
  error?: string | boolean;
  isMulti?: boolean;

  options:
    | OptionsOrGroups<
        {
          label: string;
          value: string;
        },
        GroupBase<{
          label: string;
          value: string;
        }>
      >
    | undefined;
  onChange: (
    arg0:
      | SelectType
      | string
      | {
          label: string | undefined;
          value: string | undefined;
        }
  ) => void;
  onBlur: (arg0: string, arg1: boolean) => void;
  touched?: boolean;
}
interface editorType {
  placeholder: string;
  hindi?: boolean;
  hindiValue?: (arg0: React.SetStateAction<string>) => void;
  todo: string;
  editorValue?: string | undefined;
  cookiesValue?: string;
  name?: string;
  onChange: (
    field: string,
    value: sting,
    shouldValidate?: boolean | undefined
  ) => void;
  onBlur?: (arg0: string, arg1: boolean) => void;
}

interface questionDataType {
  _id: string;
  question: string;
  type: string;
  section: {
    _id: string;
    name: string;
  };
  element: {
    _id: string;
    name: string;
  };
  difficultyLevel: string;
  class: {
    _id: string;
    name: string;
  };
}

interface userInitialValue {
  userName: string;
  name: string;
  sections: [];
  level: {
    _id: string;
    name: string;
  };
  email: string;
  mobile: string;
  status: string | boolean;
}

interface TestSelectType {
  label: string;
  marks: string;
  noOfDigits: string;
  value: string;
  timeDuration: string;
}

interface TestValues {
  marks: string | number;
  noOfDigits: string | number;
  level: string;
  timeDuration: string | number;
}
interface TestDataType {
  _id: string | number;
  marks: string | number;
  noOfDigits: string | number;
  level: string;
  timeDuration: string | number;
}

interface examValues {
  _id?:string;
  mode: string;
  package: {
    name: string;
    _id: string;
  };
  name: string;
  options: [
    {
      section: {
        _id: string;
        name: string;
      };
      element: {
        _id: string;
        name: string;
      };
      noOfQuestions: string;
      questionType: string;
      class: {
        _id: string;
        name: string;
      };
    }
  ];
  sendReport: [];
  sendAudioReport: [];
  showAnswerSheet: string | boolean;
  randomQuestion: string | boolean;
  browserTolerence: string | boolean;
  optionShuffle: string | boolean;
  examDuration: string;
  attemptCount: string;
  startDate: string;
  endDate: string;
  testSequence: string[];
}
