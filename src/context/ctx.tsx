import { Context, createContext, Dispatch, SetStateAction } from "react";

export const BookmarkContext: Context<IBookmarkCtx> = createContext({
  list: [],
  addItem: (param) => param,
  removeItem: (param) => param,
  resetList: () => {},
});

export const RegistrationInputsContext = createContext({
  inputs: {
    roleState: {
      value: "",
      setValue: (() => {}) as Dispatch<SetStateAction<RoleType | "">>,
    },
    usernameState: {
      value: "",
      setValue: (() => {}) as Dispatch<SetStateAction<string>>,
    },
    surnameState: {
      value: "" as string,
      setValue: (() => {}) as Dispatch<SetStateAction<string>>,
    },
    birthDateState: {
      value: "" as string,
      setValue: (() => {}) as Dispatch<SetStateAction<string>>,
      max: "",
    },
    emailState: {
      value: "",
      setValue: (() => {}) as Dispatch<SetStateAction<string>>,
    },
    passwordState: {
      value: "",
      setValue: (() => {}) as Dispatch<SetStateAction<string>>,
    },
    reTypedPasswordState: {
      value: "",
      setValue: (() => {}) as Dispatch<SetStateAction<string>>,
    },
  },
  stepIdxState: {
    step: 0,
    setStep: (() => {}) as Dispatch<SetStateAction<number>>,
  },
  messages: {
    credentialsMessage: {
      value: "",
      setValue: (() => {}) as Dispatch<SetStateAction<string>>,
    },
  },
});

export const NotificationsContext = createContext({
  showNotification: (() => {}) as (
    isShown: boolean,
    type: "success" | "error" | "loading",
    title: string,
    duration?: number
  ) => void,
  isShown: false,
  notifType: "" as "success" | "error" | "loading",
  notifTitle: "",
});

export const RoomsListFilterContext = createContext({
  selectedCategories: ["all"],
  setSelectedCategories: (() => {}) as Dispatch<SetStateAction<string[]>>,
});
