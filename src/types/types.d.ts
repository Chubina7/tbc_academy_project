// Middleware
type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware

// Componetnts
type LoginResponse = { status: number; message: string }
type LogOutResponse = { message: string }
type SetQueryType = React.Dispatch<React.SetStateAction<string>>
type SetSortRuleType = React.Dispatch<React.SetStateAction<boolean>>
type SortStateType = { sortRule: boolean; setSortRule: SetSortRuleType };
type ThemeListType = Record<
    string,
    {
        icon: React.JSX.Element;
        setTheme: () => void;
    }
>;
type LangPrefListType = Record<
    string,
    {
        icon: React.ReactNode;
        setLng: () => Promise<void>;
    }
>
type LandingNavItemsType = Array<ILandingNavItem>
type DashboardNavListType = Array<IDashboardNavListItem>

// General
type RoleType = "teacher" | "student" | "admin"

// Courses
type AnnouncementComponentType = {
    announcement_id: number,
    title: string
    body: string
    created_at: string
    author_id: string
    author_name: string
    author_surname: string
    user_image: null
}
type MemberComponentType = {
    user_id: string;
    username: string;
    surname: string;
    email: string;
    image: string | null;
};

// User
type IUser = {
    user_id: string
    username: string
    surname: string | null
    email: string
    password: string
    role: RoleType
    birth_date: string | null
    profile_picture: string | null
}

// bookshelf
type BookTypes = "image/bmp" | "image/gif" | "image/jpeg" | "image/png" | "image/tiff" | "image/webp" | "image/x-icon" | "image/svg+xml" |
    "application/pdf" |
    "text/plain" |
    "application/msword" |
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document" |
    "application/vnd.openxmlformats-officedocument.presentationml.presentation"