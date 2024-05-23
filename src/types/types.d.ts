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

// Registration
type RegSurnameType = string
type RegAgeType = number