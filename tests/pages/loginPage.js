/* global elements */

class LoginPage {
    get elements() {
        return elements.loginPage;
    }

    login(username, password) {
        $(this.elements.usernameInput).addValue(username);
        $(this.elements.passwordInput).addValue(password);
        $(this.elements.loginButton).click();
    }
}

export const loginPage = new LoginPage();
