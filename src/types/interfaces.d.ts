// Products
interface IProduct {
    id?: number
    title: string
    description: string
    price: number
    discountPercentage?: number
    rating?: number
    stock?: number
    brand?: string
    category?: string
    thumbnail: string
    images?: string[]
    route?: string
}
interface IProducts {
    products: Array<IProduct>
    total: number
    skip: number
    limit: number
}

// Recipes
interface IRecipe {
    id?: number
    name: string
    ingredients?: Array<string>
    instructions?: Array<string>
    prepTimeMinutes: number
    cookTimeMinutes?: number
    servings: number
    difficulty: string
    cuisine?: string
    caloriesPerServing?: number
    tags: Array<string>
    userId?: number
    image: string
    rating: number
    reviewCount?: number
    mealType: Array<string>
}
interface IRecipes {
    recipes: Array<IRecipe>
    total: number
    skip: number
    limit: number
}

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
interface IUserIsAuthed {
    id: number
    username: string
    email: string
    firstName: string
    lastName: string
    gender: string
    image: string
    token: string
}

// sql
interface IUserLogin {
    email: string
    password: string
}
interface IUserRegister extends IUserLogin {
    username: string,
    role: RoleType
}
interface IUserCredentials extends IUserRegister {
    user_id: string
}
interface IUserPublics {
    user_id: string,
    username: string,
    email: string,
    age: number
}

// General for Components
interface IMetaData {
    title: string
    description: string
}
interface IParams {
    locale: string
    productId: number
    blogId: number
}

// Context
interface IBookmarkCtx {
    list: any;
    addItem: (param: any) => void;
    removeItem: (param: any) => void;
    resetList: () => void;
}

// 
interface IThemeListItem {
    title: "light" | "os" | "dark";
    icon: React.ReactNode
}
interface ILandPrefListItem {
    title: "ka" | "en";
    icon: React.ReactNode
}
interface ILandingNavItem {
    placeholder: "home" | "products" | "blog" | "contact" | "profile" | "admin";
    href: "/" | "/products" | "/blog" | "/contact" | "/profile" | "/admin";
    whenActive: "/" | "/products" | "/blog" | "/contact" | "/profile" | "/admin";
}
interface IDashboardNavListItem {
    title: "Home" | "Courses" | "Schedule" | "Annoucements" | "El-Resources",
    icon: React.ReactNode,
    onActive: React.ReactNode,
    href: "" | "/courses" | "/schedule" | "/annoucements" | "/el-resources",
    forHeading: string
}