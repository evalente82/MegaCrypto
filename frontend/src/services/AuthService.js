export function doLogin(email, password) {
    return new Promise((response, reject) => {
        if (email === 'contato@luiztools.com.br'
            && password === '123456') {
            response(true);
        }
        reject(`Invalid user and/or password!`);
    })
}

export function doLogout() {

}