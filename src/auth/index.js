
export function storeCurrentUser(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
}

export function getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    return user;
}

export function clearCurrentUser() {
    localStorage.removeItem('currentUser');
}

// export function getCurrentUser() {
//     const user = localStorage.getItem("currentUser");
//     if(!user || user === "undefined") return null;
//     return JSON.parse(user);
// }


// export { default as Greeting } from './Greeting'
// export { default as AuthForm } from './AuthForm'