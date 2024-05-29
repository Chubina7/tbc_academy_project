// Middleware
type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware

// Componetnts
type LoginResponse = { status: number; message: string }
type LogOutResponse = { message: string }
type SetQueryType = React.Dispatch<React.SetStateAction<string>>
type SetSortRuleType = React.Dispatch<React.SetStateAction<boolean>>
type SortStateType = { sortRule: boolean; setSortRule: SetSortRuleType };
type ThemeListType = Array<IThemeListItem>;
type LangPrefListType = Array<ILandPrefListItem>
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