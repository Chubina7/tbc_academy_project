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
            return "https://tbc-accelerator-project.vercel.app";
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
