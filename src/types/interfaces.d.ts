// Users
interface IUser {
    username: string
    surname: string | null
    email: string
    password: string
    role: RoleType
    age: number | null
}
interface IUserLoginInfo {
    email: string | undefined
    password: string | undefined
}

// sql
interface IUserLogin {
    email: string
    password: string
}
interface IUserRegister extends IUserLogin {
    username: string,
    role: RoleType
    surname: string,
    birth_date: string
}
interface IUserCredentials extends IUserRegister {
    user_id: string
}
interface IUserPublics {
    user_id: string,
    username: string,
    email: string,
    birth_date: string
}

// General for Components
interface IMetaData {
    title: string
    description: string
}
interface IParams {
    locale: string
    slug: string
}

// Context
interface IBookmarkCtx {
    list: any;
    addItem: (param: any) => void;
    removeItem: (param: any) => void;
    resetList: () => void;
}

// General
interface IThemeListItem {
    title: "light" | "os" | "dark";
    icon: React.ReactNode
}
interface ILandPrefListItem {
    title: "ka" | "en";
    icon: React.ReactNode
}
interface ILandingNavItem {
    placeholder: "home" | "about" | "contact" | "admin";
    href: "/" | "/about" | "/contact" | "/admin";
    whenActive: "/" | "/about" | "/contact" | "/admin";
}
interface IDashboardNavListItem {
    title: "Home" | "Courses" | "Schedule" | "Annoucements" | "El-Resources",
    icon: React.ReactNode,
    onActive: React.ReactNode,
    href: "" | "/courses" | "/schedule" | "/annoucements" | "/el-resources",
    forHeading: string
}

// 
interface IRegisterPersonalDetails {
    username: string
    surname: string | undefined | null
    age: number | undefined | null
}
interface IRegisterCredentials {
    email: string
    password: string
}

// Courses
interface ISingleCourse {
    course_title: string
    course_description: string
    category: string
    created_at: string
    updated_at: string
    image: string | null
    announcements: Array<AnnouncementComponentType>
    members: Array<MemberComponentType>
}