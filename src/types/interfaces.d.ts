// Products
interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[] | string
}
interface IProducts {
    products: Array<IProduct>,
    total: number,
    skip: number,
    limit: number
}

// Recipes
interface IRecipe {
    id: number,
    name: string,
    ingredients: Array<string>,
    instructions: Array<string>,
    prepTimeMinutes: number,
    cookTimeMinutes: number,
    servings: number,
    difficulty: string,
    cuisine: string,
    caloriesPerServing: number,
    tags: Array<string>,
    userId: number,
    image: string,
    rating: number,
    reviewCount: number,
    mealType: Array<string>,
}
interface IRecipes {
    recipes: Array<IRecipe>,
    total: number,
    skip: number,
    limit: number
}

// Users
interface IUser {
    id: number,
    firstName: string,
    lastName: string,
    maidenName?: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
    username: string,
    password: string,
    birthDate: string,
    image: string,
    bloodGroup?: string,
    height: number,
    weight: number,
    eyeColor: string,
    hair?: { color: string, type: string },
    domain?: string,
    ip: string,
    address: {
        address: string,
        city: string,
        coordinates: { lat: number, lng: number },
        postalCode: string,
        state: string,
    },
    macAddress?: string,
    university?: string,
    bank?: {
        cardExpire: string,
        cardNumber: string,
        cardType: string,
        currency: string,
        iban: string,
    },
    company?: {
        address: {
            address: string,
            city: string,
            coordinates: { lat: number, lng: number },
            postalCode: string,
            state: string,
        },
        department: string,
        name: string,
        title: string,
    },
    ein?: string,
    ssn?: string,
    userAgent?: string,
}

// Dictionary

// Define types for the dictionaries object


// Define type for the getDictionary function