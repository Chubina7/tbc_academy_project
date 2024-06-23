// General
interface IMetaData {
    title: string
    description: string
}
interface IParams {
    locale: "ka" | "en"
    slug: string
}
interface IThemeListItem {
    title: "light" | "os" | "dark";
    icon: React.ReactNode
}
interface ILandPrefListItem {
    title: "ka" | "en";
    icon: React.ReactNode
    setFunction: () => Promise<void>
}
interface ILandingNavItem {
    placeholder: "home" | "about" | "contact" | "admin";
    href: "/" | "/about" | "/contact" | "/admin";
    whenActive: "/" | "/about" | "/contact" | "/admin";
}
interface IDashboardNavListItem {
    title: "Home" | "Rooms" | "Schedule" | "Announcements" | "Bookshelf",
    icon: React.ReactNode,
    onActive: React.ReactNode,
    href: "" | "/rooms" | "/schedule" | "/announcements" | "/bookshelf",
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
    room_description: string
    room_image: string
    teacher: string
    enrolled_number: number
    category: Array<string>
    created_at: string
}
interface IRoomsApiReturn {
    rooms: Array<IRoom>
    categories: Array<string>;
}
interface IRoomUserListItem {
    user_id: string;
    profile_picture: null;
    username: string;
    surname: null;
    role: RoleType;
}
// Single Room
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
    room_image: string,
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
interface IRoomTeacherAvgs {
    user_id: string;
    username: string;
    surname: string;
    student_avg_grade: number;
}
interface IRoomStudentAvgs {
    user_avg: number,
    class_avg: number,
}
interface ISingleRoomApiReturn {
    intro: IRoomIntro
    assignments: Array<IRoomAssignment>
    categories: Array<string>
    announcements: Array<IRoomAnnouncement>
    grade: {
        student_data: IRoomStudentAvgs | null
        teacher_data: Array<IRoomTeacherAvgs> | null
    }
    members: Array<IRoomMember>
}

// Announcements
interface IAnnouncement {
    announcement_id: string
    announcement_title: string
    announcement: string
    comments_number: number
    announced_at: string
    author: {
        user_id: string
        username: string
        surname: string | null
        room_id: string
        room_name: string
    }
}
interface IAnnouncemenetApiReturn {
    announcements: Array<IAnnouncement>
    room_names: Array<string>

}
// Single Announcemenet
interface IAnnouncementComment {
    author: {
        user_id: string
        username: string
        surname: string | null
        profile_picture: string | null
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
interface ISingleAnnouncementData {
    author: {
        user_id: string;
        room_id: string;
        username: string;
        surname: string | null;
        room_name: string;
    };
    announcement_title: string;
    announcement: string;
    announced_at: string;
}

// Profile page
interface IUserPublicInfo {
    username: string;
    surname: string | null;
    birth_date: string | null;
    email: string;
    profile_picture: string | null;
    role: RoleType;
}

// Bookshelf
interface IBook {
    book_id: string;
    book_title: string;
    book_description: string;
    book_type: BookTypes;
    author: {
        room: {
            room_id: string;
            room_name: string;
        } | null;
        user: {
            surname: string;
            user_id: string;
            username: string;
        };
    };
}
interface IUploadNewBook {
    book: {
        name: string,
        type: BookTypes,
    },
    description: string,
    room: {
        room_id: string;
        room_name: string;
    } | null,
    title: string,
}