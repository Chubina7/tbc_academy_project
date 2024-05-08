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
    id: number
    firstName: string
    lastName: string
    maidenName?: string
    age: number
    gender: string
    email: string
    phone: string
    username: string
    password: string
    birthDate: string
    image: string
    bloodGroup?: string
    height: number
    weight: number
    eyeColor: string
    hair?: { color: string, type: string }
    domain?: string
    ip: string
    address: {
        address: string
        city: string
        coordinates: { lat: number, lng: number }
        postalCode: string
        state: string
    }
    macAddress?: string
    university?: string
    bank?: {
        cardExpire: string
        cardNumber: string
        cardType: string
        currency: string
        iban: string
    }
    company?: {
        address: {
            address: string
            city: string
            coordinates: { lat: number, lng: number }
            postalCode: string
            state: string
        }
        department: string
        name: string
        title: string
    }
    ein?: string
    ssn?: string
    userAgent?: string
}
interface IUserLoginInfo {
    username: string | undefined
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
    username: string
    password: string
}
interface IUserRegister extends IUserLogin {
    email: string,
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

// Products Page


