export function generateUniqueId(indicator: string) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = chars.length;
    let userID = "";

    for (let i = 0; i < 4; i++) {
        userID += chars.charAt(Math.floor(Math.random() * charactersLength));
    }

    return indicator + userID;
}
export function dbError() {
    // should get error code and show different text messages
}
export function detectEnviro() {
    const enviro = process.env.NODE_ENV;

    switch (enviro) {
        case "production":
            return "https://teach-flow.vercel.app";
        case "development":
            return "http://localhost:3000";
        case "test":
            return "http://localhost:3000";
    }
}
export function minimumDatePrevention() {
    const today = new Date();
    const minimumDate = new Date(today.setFullYear(today.getFullYear() - 18));
    const minimumAge = minimumDate.toISOString().split("T")[0];

    return minimumAge;
};

export function arraysEqual(arr1: Array<string>, arr2: Array<string>) {
    if (arr1.length !== arr2.length) return false;

    const sortedArr1 = arr1.slice().sort();
    const sortedArr2 = arr2.slice().sort();

    for (let i = 0; i < sortedArr1.length; i++) {
        if (sortedArr1[i] !== sortedArr2[i]) return false;
    }

    return true;
};