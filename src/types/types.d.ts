// Middleware
type MiddlewareFactory = (middleware: NextMiddleware) => NextMiddleware

// Componetnts
type LoginResponse = { status: number; message: string }
type LogOutResponse = { message: string }
type SetQueryType = React.Dispatch<React.SetStateAction<string>>
type SetSortRuleType = React.Dispatch<React.SetStateAction<boolean>>
type SortStateType = { sortRule: boolean; setSortRule: SetSortRuleType };