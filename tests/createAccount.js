import {test} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { CreateAccountPage } from '../pages/CreateAccountPage';
import { lumoURL } from '../environment.config';

export const createAccount = ()=>{
test('Verify user can create an account successfully',async({page})=>{

   
    function generateEmail() {
    const timestamp = Date.now();
    return `user${timestamp}@example.com`;
    
}
    const email = generateEmail()

    await page.goto(lumoURL);
    const HomeObj = new HomePage(page);
    const CreateAccountObj = new CreateAccountPage(page);

    await HomeObj.clickCreateAccount();
    await CreateAccountObj.fillNames("Sam","Smith");
    await CreateAccountObj.fillEmail(email);
    await CreateAccountObj.fillPassword("Sam@1234","Sam@1234");
    await CreateAccountObj.clickCreateAccount();
})
}