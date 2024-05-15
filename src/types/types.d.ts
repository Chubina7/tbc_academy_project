// Middleware
type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware

// Componetnts
type LoginResponse = { status: number; message: string }
type LogOutResponse = { message: string }
type SetQueryType = React.Dispatch<React.SetStateAction<string>>
type SetSortRuleType = React.Dispatch<React.SetStateAction<boolean>>
type SortStateType = { sortRule: boolean; setSortRule: SetSortRuleType };
type ThemeListType = Array<{ title: "light" | "os" | "dark"; icon: React.ReactNode }>;
type LangPrefListType = Array<{
    title: "ka" | "en";
    icon: React.ReactNode
}>
type LandingNavItemsType = Array<{
    placeholder: "home" | "products" | "blog" | "contact" | "profile" | "admin";
    href: "/" | "/products" | "/blog" | "/contact" | "/profile" | "/admin";
    whenActive: "/" | "/products" | "/blog" | "/contact" | "/profile" | "/admin";
}>
type DashboardNavListTyope = Array<{
    title: "Home" | "Courses" | "Schedule" | "Annoucements" | "El-Resources",
    icon: React.ReactNode,
    onActive: React.ReactNode,
    href: "" | "/courses" | "/schedule" | "/annoucements" | "/el-resources",
    forHeading: string
}>