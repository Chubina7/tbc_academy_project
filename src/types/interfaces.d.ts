// Translation
interface ITranslation {
    auth: {
        login: {
            title: string
            form: {
                usernameLabel: string
                usernameInput: string
                passwordLabel: string
                passwordInput: string
                signInBtn: string
            },
            info: {
                text: string
                underline: string
            }
        },
        register: {
            title: string
            form: {
                usernameLabel: string
                usernameInput: string
                emailLabel: string
                emailInput: string
                passwordLabel: string
                passwordInput: string
                rePasswordInput: string
                signUpBtn: string
            },
            info: {
                text: string
                underline: string
            }
        }
    },
    header: {
        navigation: {
            navItems: {
                home: string
                blog: string
                contact: string
                profile: string
            },
            lngChanger: {
                geo: string
                eng: string
            },
            themeChanger: {
                light: string
                dark: string
                os: string
            },
            signOutBtn: string
        }
    },
    products: {
        searchInput: string
        sortBtn: {
            sort: string
            unSort: string
        },
        productItem: {
            seeMoreBtn: string
        },
        dynamicProductItem: {
            brand: string
            category: string
            discount: string
            stock: string
        }
    },
    blog: {
        blogGridItem: {
            hardness: string
            type: string
        },
        blogDynamicItem: {
            content: {
                ingredients: string
                instructions: string
                cookTime: string
                calories: string
            },
            suggestions: {
                title: string
            }
        }
    },
    contact: {
        contactInfo: {
            title: string
            info: {
                address: {
                    name: string
                    value: string
                },
                phone: {
                    name: string
                    value: string
                },
                email: {
                    name: string
                    value: string
                },
                website: {
                    name: string
                    value: string
                }
            }
        },
        form: {
            labels: {
                name: string
                email: string
                subject: string
                questionOrMessage: string
            },
            inputs: {
                namePh: string
                emailPh: string
                subjectPh: string
                questionOrMessagePh: string
            }
        }
    },
    profile: {
        userInfo: {
            title: string
            eachField: {
                save: string
                edit: string
                userDetails: {
                    firstName: string
                    lastName: string
                    image: string
                    gender: string
                }
            }
        },
        loginInfo: {
            title: string
            email: {
                current: string
                email: string
                emailPh: string
                save: string
            },
            password: {
                title: string
                message: string
                save: string
                enterPass: string
                confirmPass: string
            }
        }
    },
    footer: {
        title: string
        inputPh: string
    },
    default: {
        measurement: {
            currency: string
            calories: string
        },
        time: {
            minute: string
        },
        action: {
            seeDetails: string
            readMore: string
        },
        otherDetails: string
        rating: string
        price: string
        required: string
    }
}

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
    images?: string[] | string
    route?: string
    dict?: any
}
interface IProducts {
    products: Array<IProduct>
    total: number
    skip: number
    limit: number
}

// Recipes
interface IRecipe {
    id: number
    name: string
    ingredients: Array<string>
    instructions: Array<string>
    prepTimeMinutes: number
    cookTimeMinutes: number
    servings: number
    difficulty: string
    cuisine: string
    caloriesPerServing: number
    tags: Array<string>
    userId: number
    image: string
    rating: number
    reviewCount: number
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
interface ProductsProps {
    data: Array<IProduct>;
    dict: any;
}
interface HomeActionProps {
    sortState: SortStateType
    queryState: SetQueryType;
    dict?: any;
}
interface ProductListProps {
    list: Array<IProduct>;
    sortRule: boolean;
    searchFilterKeyword: string;
    dict?: any;
}