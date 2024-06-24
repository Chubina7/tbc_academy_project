import React, { createContext, Dispatch, SetStateAction } from "react";

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
  showSuggestions: false,
  setShowSuggestions: (() => {}) as React.Dispatch<
    React.SetStateAction<boolean>
  >,
  categories: [] as Array<string>,
  handleCtgAdd: (() => {}) as (item: string) => void,
  handleCtgRemove: (() => {}) as (excitingCtg: string) => void,
  errorMsg: "",
  handleReset: (() => {}) as () => void,
  setIsLoading: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
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
    members: [] as Array<string>,
  },
  setters: {
    setTitle: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
    setDescription: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
    setCoverPicture: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
    setCategories: (() => {}) as React.Dispatch<
      React.SetStateAction<Array<string>>
    >,
    setMembers: (() => {}) as React.Dispatch<
      React.SetStateAction<Array<string>>
    >,
  },
  isLoading: false,
  setIsLoading: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
});

export const ProfileLoadingStateContext = createContext({
  setIsLoading: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
});
export const PersonalInfoChangingContext = createContext({
  prevValues: {
    username: "",
    surname: ("" || null) as string | null,
    birth_date: ("" || null) as string | null,
    profile: {
      picture: "",
      file: {} as File,
    },
  },
  value: {
    username: "",
    surname: ("" || null) as string | null,
    birth_date: ("" || null) as string | null,
    profile: {
      picture: "",
      file: {} as File,
    },
  },
  setValue: (() => {}) as React.Dispatch<
    React.SetStateAction<{
      username: string;
      surname: string | null;
      birth_date: string | null;
      profile: {
        picture: string;
        file: File;
      };
    }>
  >,
});
export const AuthDetailsChangingContext = createContext({
  emailVal: "",
  setEmailVal: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
  passVal: "",
  setPassVal: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
  prevData: { password: "", email: "" },
});

export const AddNewAnnouncementContext = createContext({
  title: "",
  setTitle: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
  announcement: "",
  setAnnouncement: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
  roomId: "",
  setRoomId: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
  setIsLoading: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
  error: false,
  setError: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
});

export const EditRoomInformationContext = createContext({
  details: { title: "", description: "" },
  setDetails: (() => {}) as React.Dispatch<
    React.SetStateAction<{ title: string; description: string }>
  >,
  validationMessage: "",
  setValidationMessage: (() => {}) as React.Dispatch<
    React.SetStateAction<string>
  >,
  prevData: {
    title: "",
    description: "",
  },
  setIsLoading: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
});

export const UploadNewBookContext = createContext({
  data: {} as IUploadNewBook,
  setData: (() => {}) as React.Dispatch<React.SetStateAction<IUploadNewBook>>,
  error: "",
  setError: (() => {}) as React.Dispatch<React.SetStateAction<string>>,
  initialValue: {} as IUploadNewBook,
  isLoading: false,
  setIsLoading: (() => {}) as React.Dispatch<React.SetStateAction<boolean>>,
  roomSuggestions: [] as Array<{
    room_id: string;
    room_name: string;
  }> | null,
});

export const BookmarkContext = createContext({
  actions: {
    addToBookmark: (() => {}) as (book_id: string) => void,
    removeFromBookmark: (() => {}) as (book_id: string) => void,
  },
  properties: {
    list: [] as Array<BookmarkItemType>,
    length: 0,
    includes: (() => false) as (book_id: string) => boolean,
  },
});
