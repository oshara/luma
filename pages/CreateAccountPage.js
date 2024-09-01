export class CreateAccountPage {

constructor(page){
    this.page = page;
    this.firstName = page.locator('#firstname');
    this.lastName =page.locator('#lastname');
    this.email = page.locator('#email_address');
    this.password = page.locator('#password');
    this.confirmPassword= page.locator('#password-confirmation');
    this.createAccounBtn = page.locator('button[title="Create an Account"]');
}

async fillNames(firstName, lastName){
    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
}


async fillEmail(email){
    await this.email.fill(email);
}

async fillPassword(password,confimPassword){
    await this.password.fill(password);
    await this.confirmPassword.fill(confimPassword);
}

async clickCreateAccount(){
    await this.createAccounBtn.click();
    await this.page.pause();
}


}