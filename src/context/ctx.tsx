import { Context, createContext, Dispatch, SetStateAction } from "react";

export const BookmarkContext: Context<IBookmarkCtx> = createContext({
  list: [],
  addItem: (param) => param,
  removeItem: (param) => param,
  resetList: () => {},
});
// add other contexts

export const RegistrationInputsContext = createContext({
  roleState: {
    value: "",
    setValue: (() => {}) as Dispatch<SetStateAction<RoleType>>,
  },
  usernameState: {
    value: "",
    setValue: (() => {}) as Dispatch<SetStateAction<string>>,
  },
  surnameState: {
    value: "" as RegSurnameType,
    setValue: (() => {}) as Dispatch<SetStateAction<RegSurnameType>>,
  },
  ageState: {
    value: Number() as RegAgeType,
    setValue: (() => {}) as Dispatch<SetStateAction<RegAgeType>>,
  },
  emailState: {
    value: "",
    setValue: (() => {}) as Dispatch<SetStateAction<string>>,
  },
  passwordState: {
    value: "",
    setValue: (() => {}) as Dispatch<SetStateAction<string>>,
  },
});
