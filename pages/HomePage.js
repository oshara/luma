

export class HomePage{

    constructor(page){
        this.page=page;
        this.createAccountBtn= page.locator('//div[@class="panel header"]/ul/li[3]/a');
    }

    async clickCreateAccount(){
        await this.createAccountBtn.click();
    }
}