export function loginValidationMessage(email: string, password: string) {
    if (password.length < 5 && password.trim() !== "") {
        return "Password length must be more than 5";
    } else if (email.split("@").length <= 1 && email.trim() !== "") {
        return "Email must contain '@' symbol";
    } else if (!email.includes(".") && email.trim() !== "") {
        return "Email must contain '.' symbol";
    } else if (
        email.trim().charAt(email.length - 1) === "." &&
        email.trim() !== ""
    ) {
        return "Email must not end with '.' symbol";
    } else if (email.length < 5 && email.trim() !== "") {
        return "Email form is not valid";
    } else if (email.trim() === "" || password.trim() === "") {
        return "Sending empty values is not allowed";
    } else {
        return null;
    }
}
export function credentialsValidationMessage(email: string, password: string, reTypedPass: string) {
    if (password.length < 5 && password.trim() !== "") {
        return "Password length must be more than 5";
    } else if (email.split("@").length <= 1 && email.trim() !== "") {
        return "Email must contain '@' symbol";
    } else if (!email.includes(".") && email.trim() !== "") {
        return "Email must contain '.' symbol";
    } else if (
        email.trim().charAt(email.length - 1) === "." &&
        email.trim() !== ""
    ) {
        return "Email must not end with '.' symbol";
    } else if (email.length < 5 && email.trim() !== "") {
        return "Email form is not valid";
    } else if (email.trim() === "" || password.trim() === "") {
        return "Sending empty values is not allowed";
    } else if (password.trim() !== reTypedPass.trim()) {
        return "Passwords are not matching! Spell correctly";
    } else {
        return null;
    }
};