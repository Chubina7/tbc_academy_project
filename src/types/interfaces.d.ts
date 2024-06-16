// General
interface IMetaData {
    title: string
    description: string
}
interface IParams {
    locale: string
    slug: string
}
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
    title: "Home" | "Rooms" | "Schedule" | "Announcements" | "El-Resources",
    icon: React.ReactNode,
    onActive: React.ReactNode,
    href: "" | "/rooms" | "/schedule" | "/announcements" | "/el-resources",
    forHeading: string
}

// Users
interface IUserAdmin {
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

// Rooms
interface IRoom {
    room_id: string
    room_name: string
    description: string
    image: string | null
    teacher: string
    enrolled_number: number
    category: Array<string>
    created_at: string
}
interface IRoomsApiReturn {
    rooms: Array<IRoom>
    categories: Array<string>;
}
// single room
interface IRoomAssignment {
    assignment_id: string;
    assignment_title: string;
    assignment_description: string;
    assignment_status: boolean;
    created_at: string;
    assignment_past_due: string;
}
interface IRoomIntro {
    room_name: string,
    room_description: string,
    created_at: string,
    room_image: string | null,
}
interface IRoomAnnouncement {
    announcement_id: string;
    announcement_title: string;
    annonced_at: string;
    announcement_description: string;
    announcement_comment_num: number;
}
interface IRoomMember {
    user_id: string;
    username: string;
    surname: string | null;
    email: string;
    profile_picture: string | null;
}


// Announcements
interface IAnnouncementList {
    author: {
        user_id: string
        username: string
        surname: string | null
        room_id: string
        room_title: string
    }
    announcement_id: string
    announcement_title: string
    announcement: string
    comments_number: number
    announced_at: string
}
interface IAnnouncementComment {
    author: {
        user_id: string
        username: string
        surname: string | null
        user_img: string | null
        role: RoleType
    },
    comment_id: string
    comment: string
    likes: {
        isLiked: boolean
        quantity: number
    }
    commented_at: string
}

