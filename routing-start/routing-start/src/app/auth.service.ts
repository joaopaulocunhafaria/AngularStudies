

export class AuthService {

    loggedIn: boolean = false;



    isLogged() {
        const promisse = new Promise(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn)
                }, 500)     
            }
        );

        return promisse;
    }

    logIn() {
        this.loggedIn = true;
    }

    logOut() {
        this.loggedIn = false;
    }


}