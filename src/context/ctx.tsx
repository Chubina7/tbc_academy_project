import React, { Context, createContext, Dispatch, SetStateAction } from "react";

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

export const MemberSettingsDialogContext = createContext({
  removeDialog: false,
  setRemoveDialog: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
  roleDialog: false,
  setRoleDialog: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
});

export const AddNewCategoryContext = createContext({
  inputValue: "",
  setInputValue: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
  suggestionList: [] as Array<string>,
  setSuggestionList: (() => {}) as React.Dispatch<
    React.SetStateAction<Array<string>>
  >,
  showSuggestions: false,
  setShowSuggestions: (() => {}) as React.Dispatch<
    React.SetStateAction<boolean>
  >,
});

export const AddNewRoomContext = createContext({
  steps: {
    activeIdx: 0,
    setActiveIdx: (() => {}) as React.Dispatch<React.SetStateAction<number>>,
  },
  data: {
    title: "",
    description: "",
    coverPicture: "",
    categories: [] as Array<string>,
    members: [] as Array<any>,
  },
  setters: {
    setTitle: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
    setDescription: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
    setCoverPicture: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
    setCategories: (() => {}) as React.Dispatch<
      React.SetStateAction<Array<string>>
    >,
    setMembers: (() => {}) as React.Dispatch<React.SetStateAction<Array<any>>>,
  },
});

export const PersonalInfoChangingContext = createContext({
  prevValues: {
    username: "",
    surname: ("" || null) as string | null,
    birth_date: ("" || null) as string | null,
    profile_picture: ("" || null) as string | null,
  },
  value: {
    username: "",
    surname: ("" || null) as string | null,
    birth_date: ("" || null) as string | null,
    profile_picture: ("" || null) as string | null,
  },
  setValue: (() => {}) as React.Dispatch<
    React.SetStateAction<{
      username: string;
      surname: string | null;
      birth_date: string | null;
      profile_picture: string | null;
    }>
  >,
});
